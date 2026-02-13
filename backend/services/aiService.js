// services/aiService.js - Using OpenRouter SDK
import dotenv from "dotenv";
dotenv.config();

import { OpenRouter } from "@openrouter/sdk";

const openRouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

async function generatedContent({ topic, platform, tone }) {
  try {
   

    const prompt = `Create a ${tone} ${platform} post about: "${topic}". Make it engaging and optimized for ${platform}. Include relevant hashtags if applicable. Keep it concise and attention-grabbing.`;

    const stream = await openRouter.chat.send({
      model: "liquid/lfm-2.5-1.2b-thinking:free",
      messages: [{ role: "user", content: prompt }],
      stream: true,
    });

    let fullContent = "";

    for await (const chunk of stream) {
      const content = chunk.choices?.[0]?.delta?.content;
      if (content) {
        process.stdout.write(content);
        fullContent += content;
      }

      if (chunk.usage) {
        console.log("\n📊 Usage:", chunk.usage);
      }
    }

    console.log("\n\n✅ Content generated successfully!\n");
    return fullContent;
  } catch (error) {
    
    console.error(" Message:", error.message);

  }
}

export { generatedContent };
