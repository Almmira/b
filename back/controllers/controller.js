import {getQuizAikenTopic} from "../helpers/chatgpt.js";
import aikenToMoodleXML from "aiken-to-moodlexml";

let it = 0;
const index_quiz_topic = async (req, res) => {
    try {
        console.log("hello");
        // if(req.query.topic.length > 30){
        //     res.redirect('/');
        // }
        // let quizAiken = []
        // for (let i = 0; i < Math.min(Number(req.query.questionsCount), 100); i += 10) {
        //     let quiz = ''
        //     while (quiz.split('ANSWER').length - 1 !== 10) {
        //         quiz = await getQuizAikenTopic(req.query.topic, 10, req.query.difficulty);
        //     }
        //     quiz = quiz.replace(/([1-9]. )|([1-9][0-9]. )/gm, '')
        //     quiz = quiz.trim()
        //     quiz = quiz.split('\n\n')
        //     quizAiken = quizAiken.concat(quiz)
        // }
        //
        //
        // for (let i = 0; i < quizAiken.length; i++) {
        //     quizAiken[i] = quizAiken[i].split('\n');
        // }
        //
        // res.send({questions: quizAiken, type: 'topic'})
        let quizAiken = []
        let quiz = ''
        quiz = await getQuizAikenTopic(req.query.topic, 5, req.query.difficulty);
        quiz = quiz.trim()
        quiz = quiz.replace(/\n\nANSWER/gm, '\nANSWER')
        quiz = quiz.replace(/\n\nA\./gm, '\nA.')
        quiz = quiz.split('\n\n')
        quizAiken = quizAiken.concat(quiz)

        let quizJson = []
        for (let i = 0; i < quizAiken.length; i++) {
            quizAiken[i] = quizAiken[i].split('\n');
            let questionJson = {
                text : quizAiken[i][0].split('QUESTION: ')[1],
                options : [
                    {
                        id : 0,
                        text : quizAiken[i][1].split('A. ')[1],
                        isCorrect : false
                    },
                    {
                        id : 1,
                        text : quizAiken[i][2].split('B. ')[1],
                        isCorrect : false
                    },
                    {
                        id : 2,
                        text : quizAiken[i][3].split('C. ')[1],
                        isCorrect : false
                    },
                    {
                        id : 3,
                        text : quizAiken[i][4].split('D. ')[1],
                        isCorrect : false
                    }
                ]
            }
            questionJson.options[quizAiken[i][5].split('ANSWER: ')[1].charCodeAt(0) - 'A'.charCodeAt(0)].isCorrect = true
            quizJson.push(questionJson)
        }
        console.log(it++)
        res.send({questions: quizJson})
    } catch (error) {
        console.log("Error: " + error.message)
        console.log(it++)
        res.send({'error': 'index_quiz_topic'});
    }
}

const index_quiz_context = async (req, res) => {
    // try {
    //     if(req.query.context.length > 250){
    //         res.redirect('/');
    //     }
    //     let quizAiken = []
    //     for (let i = 0; i < Math.min(Number(req.query.questionsCount), 100); i += 5) {
    //         let quiz = ''
    //         let count = 0;
    //         while (quiz.split('ANSWER').length - 1 !== 5) {
    //             if (count > 8) {
    //                 throw new Error('Prompt caused 8 wrong requests.')
    //             }
    //             count++
    //             quiz = await getQuizAikenContext(req.query.context, 5, req.query.difficulty)
    //             quiz = quiz.replace('Answer', 'ANSWER')
    //         }
    //         quiz = quiz.replace(/([1-9]. )|([1-9][0-9]. )/gm, '')
    //         quiz = quiz.trim()
    //         quiz = quiz.split('\n\n')
    //         quizAiken = quizAiken.concat(quiz)
    //     }
    //
    //     for (let i = 0; i < quizAiken.length; i++) {
    //         quizAiken[i] = quizAiken[i].split('\n');
    //     }
    //
    //     res.render({questions: quizAiken, type: 'context'})
    // } catch (error) {
    //     console.log(error.message)
    // }
}

export {
    index_quiz_topic,
    index_quiz_context
}