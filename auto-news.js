import fs from 'fs';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const MODEL_NAMES = ["gemini-3.1-flash-lite"];

async function runNewsBlogger() {
    console.log("📰 Bắt đầu cào 20 tin tức AI...");
    const dataPath = './news_database.json';
    
    // Đọc file và kiểm tra rỗng
    const fileContent = fs.readFileSync(dataPath, 'utf-8');
    if (!fileContent || fileContent.trim() === "") {
        console.error("❌ File news_database.json đang rỗng!");
        return;
    }

    let news = JSON.parse(fileContent);

    for (let i = 0; i < news.length; i++) {
        if (news[i].content && news[i].content.length > 50) {
            console.log(`⏩ Bài ${news[i].id} đã có nội dung, bỏ qua.`);
            continue;
        }

        const modelName = MODEL_NAMES[i % MODEL_NAMES.length];
        const model = genAI.getGenerativeModel({ model: modelName });

        console.log(`\n⏳ Đang viết [${modelName}] bài ${news[i].id}: ${news[i].title}`);
        
        try {
            const prompt = `Viết một bài tin tức công nghệ về: ${news[i].title}. 
            Yêu cầu: Với vai trò là quản trị viên Ninebot.vn (một trang web về công nghệ robot phi lợi nhuận, không đại diện cho một tổ chức nào, một tập thể nào - Không cần nhắc lại những điều này vào bài viết) hãy đưa ra nhận định cá nhân và đưa ra những dự đoán về ngành trong tương lai, trung lập, thẳng thắn,HTML thuần, dùng <h2> cho tiêu đề mục, <p class="mb-4"> cho nội dung. KHÔNG markdown tick.`;
            
            const result = await model.generateContent(prompt);
            news[i].content = result.response.text().replace(/```html/g, '').replace(/```/g, '').trim();
            
            fs.writeFileSync(dataPath, JSON.stringify(news, null, 2));
            console.log(`✅ Đã lưu bài ${news[i].id}`);
            await new Promise(r => setTimeout(r, 15000)); // Nghỉ 15s giữa các bài
        } catch (e) { 
            console.error(`❌ Lỗi bài ${news[i].id}:`, e.message); 
        }
    }
    console.log("🎉 Xong xuôi!");
}

runNewsBlogger().catch(console.error);