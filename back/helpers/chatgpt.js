import OpenAI from "openai"
import { encode } from "gpt-3-encoder"
import dotenv from "dotenv"
dotenv.config()

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


async function getQuizAikenTopic (topic, questionsCount, difficulty) {
    try {
        const prompt = `
MCQ about: ${topic}
Create ${difficulty} MCQ test with ${questionsCount} questions.
Questions form: 

QUESTION: Question?
A. a 
B. a 
C. a 
D. a 
ANSWER: D

QUESTION: Question?
A. a 
B. a 
C. a 
D. a 
ANSWER: C`
        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role : 'user', content: prompt }]
        });
        console.log(chatCompletion.choices[0].message.content);
        return chatCompletion.choices[0].message.content;
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
}


/*

async function getQuizAikenContext (context, questionsCount, difficulty) {
    try {
        const prompt = `
${context}
Create a ${difficulty} quiz with ${questionsCount} MCQ questions for the article above.
Questions form: 
Question 
A. a 
B. a 
C. a 
D. a 
ANSWER: D`
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 4097 - encode(prompt).length,
            temperature: 0.5
        });
        return completion.data.choices[0].text;
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
}
*/

export {
    getQuizAikenTopic
    // getQuizAikenContext
}