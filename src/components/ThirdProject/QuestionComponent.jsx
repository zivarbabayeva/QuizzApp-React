import { useEffect, useState } from "react"

export default function QuestionComponent({question,answer,setCount,setQuestionNumber,selectedAnswers,questionNumber}) {
const [selectedAnswer,setSelectedAnswer]=useState("")
function handleClick(answer){
setSelectedAnswer(answer)
}
function handleSubmit(){
    if(answer==selectedAnswer){
        setCount(prev=>prev+1)
    }
    selectedAnswers[questionNumber]=selectedAnswer
    setQuestionNumber(prev=>prev+1)
    setSelectedAnswer("")
}
useEffect(()=>{
   
    if(selectedAnswers[questionNumber]){
     
        setSelectedAnswer(selectedAnswers[questionNumber])
    }
    else{
       
        setSelectedAnswer("")
    }
},[questionNumber])
 
    return (
        <div className="flex flex-col space-y-4">
            <h2>{question.question}</h2>
            <div className="grid grid-cols-2 gap-4">
                <p onClick={()=>handleClick("A")} className={`w-full border-2 px-6 py-4 ${selectedAnswer=="A"?"border-green-400":""}`}>{question.options.A}</p>
                <p onClick={()=>handleClick("B")} className={`w-full border-2 px-6 py-4 ${selectedAnswer=="B"?"border-green-400":""}`}>{question.options.B}</p>
                <p onClick={()=>handleClick("C")} className={`w-full border-2 px-6 py-4 ${selectedAnswer=="C"?"border-green-400":""}`}>{question.options.C}</p>
                <p onClick={()=>handleClick("D")} className={`w-full border-2 px-6 py-4 ${selectedAnswer=="D"?"border-green-400":""}`}>{question.options.D}</p>
            </div>
            <button onClick={handleSubmit} className="px-8 placeholder-sky-400 bg-green-400 rounded-xl">Submit</button>
        </div>
    )
}
