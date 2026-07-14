import fs from 'fs';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

// Khởi tạo Gemini AI bằng API Key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Danh sách các mô hình ép xung xoay vòng
const MODEL_NAMES = [
    "gemini-3.1-flash-lite", 
    
];

// Hàm tạo độ trễ để không bị API chặn
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function runAutoBlogger() {
    console.log("🚀 Khởi động Hệ thống Auto-Blogger NINEBOT (Chế độ Đa Lõi Xoay Vòng)...");
    
    // Đọc database cục bộ
    const dataPath = './database.json';
    let articles = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    
    let updatedCount = 0;
    let attemptCount = 0; // Biến đếm riêng để xoay vòng chính xác ngay cả khi bỏ qua bài cũ

    for (let i = 0; i < articles.length; i++) {
        let article = articles[i];

        // Nếu bài viết đã có nội dung, bỏ qua
        if (article.content && article.content.trim() !== "") {
            console.log(`⏩ Bỏ qua ID ${article.id} - Đã có nội dung.`);
            continue;
        }

        // Thuật toán xoay vòng (Round-Robin) chọn model
        const currentModelName = MODEL_NAMES[attemptCount % MODEL_NAMES.length];
        const model = genAI.getGenerativeModel({ model: currentModelName });

        console.log(`\n⏳ Đang nhúng não nhân tạo [${currentModelName.toUpperCase()}] viết bài ID ${article.id}: ${article.title}...`);
        
        // Prompt ra lệnh cho AI (Kỹ thuật Prompt Engineering)
        const prompt = `
            Bạn tên là Ninebot - (một kỹ sư robot (không thuộc một tổ chức nào cả), không có tập thể nào, chỉ đơn thuần là cá nhân, không liên quan đến Ninebot xe điện, có tính cách hài hước nhưng không cần phải giải thích hay trình bày tất cả những điều này vào bài viết). Thường xuyên nhắc đến "Ninebot" trong bài viết sao cho tự nhiên nhất. Viết một bài hướng dẫn chuyên sâu kỹ thuật với định dạng HTML để nhúng thẳng vào website.
            - Tiêu đề bài: ${article.title} yêu cầu: Đưa cụm từ "Ninebot" vào tiêu đề.
            - Ý chính cần bám sát: ${article.excerpt}
            - Trình độ người đọc: ${article.level}
            - Yêu cầu cấu trúc: 
              Chỉ trả về các thẻ HTML bên trong nội dung, tuyệt đối KHÔNG có thẻ <html> hay <body>, KHÔNG trả về markdown tick (\`\`\`).
              Dùng thẻ <h2 class="text-3xl text-white mb-6 flex items-center gap-3"><span class="w-2 h-8 bg-green-500 inline-block"></span> [Tên mục] </h2> cho các mục lục.
              Dùng <strong> cho từ khóa. Dùng các thẻ <p class="mb-6"> cho đoạn văn.
              Dùng thẻ <pre> và <code> nếu có đoạn code minh họa.
        `;

        try {
            // Gọi API bằng mô hình đã chọn
            const result = await model.generateContent(prompt);
            let responseText = result.response.text();
            
            // Xử lý làm sạch chuỗi (xóa markdown rác nếu AI trả thừa)
            responseText = responseText.replace(/```html/g, '').replace(/```/g, '').trim();

            // Ghi nội dung vào mảng
            articles[i].content = responseText;
            
            // Lưu đè thẳng vào file database.json ngay lập tức để không mất dữ liệu giữa chừng
            fs.writeFileSync(dataPath, JSON.stringify(articles, null, 2));
            console.log(`✅ Đã viết xong và lưu bài ID ${article.id}!`);
            
            updatedCount++;
            attemptCount++;

            // Nghỉ 15 giây để làm mát hệ thống
            console.log("Đang làm mát hệ thống (50s) trước khi chuyển sang lõi AI tiếp theo...");
            await sleep(50000); 

        } catch (error) {
            console.error(`❌ Lỗi khi viết bài ID ${article.id} bằng lõi ${currentModelName}:`, error.message);
            attemptCount++; // Vẫn tăng bộ đếm để đổi model cho bài tiếp theo nếu bài này lỗi
        }
    }

    console.log(`\n🎉 HOÀN THÀNH! Đã tự động viết ${updatedCount} bài mới vào database.json.`);
}

runAutoBlogger();