import OpenAI from "openai"
import dotenv from "dotenv"
dotenv.config()

const openai = new OpenAI({
    apiKey: dotenv.config().parsed.OPENAI_API_KEY,
});


async function func() {
    try {
        const prompt = `
Create easy MCQ test with 5 questions.
The topic is jujutsu kaisen anime.
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
            messages: [{ role : 'user', content: prompt }],
            temperature: 0.2
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


func().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});