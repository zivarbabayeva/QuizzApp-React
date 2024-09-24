import { useEffect, useState } from "react";
import QuestionComponent from "./ThirdProject/QuestionComponent";
import data from "./ThirdProject/questions.json";
const questions = data.questions;
const answers = []
export default function ThirdProject() {

    const [selectedQuestion, setSelectedQuestion] = useState(questions);
    const [answer, setAnswer] = useState(questions[0].correctAnswer);
    const [count, setCount] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(0);

    useEffect(() => {
        setAnswer(questions[questionNumber].correctAnswer);
    }, [questionNumber]);
    function nextQuestion() {
        setQuestionNumber(prev => prev + 1)
    }
    function previousQuestion() {
        setQuestionNumber(prev => prev - 1)
    }
    return (
        <div className="bg-cyan-600 h-screen flex flex-col items-center justify-center ">
            <p className="absolute right-44 top-36 text-3xl text-indigo-600 ">{count}</p>
            <header>
                <span onClick={previousQuestion}>&larr;</span>
                <h1 className="text-4xl text-green-300">Question {questionNumber + 1}</h1>
                <span onClick={nextQuestion}>&rarr;</span>
            </header>
            <main>
                <QuestionComponent setCount={setCount}
                    answer={answer}
                    question={selectedQuestion[questionNumber]}
                    questionNumber={questionNumber}
                    selectedAnswers={answers}
                />
            </main>
        </div>
    )
}
