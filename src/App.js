import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Everything in React is a ____',
			answerOptions: [
				{ answerText: 'Module', isCorrect: false },
				{ answerText: 'Component', isCorrect: true },
				{ answerText: 'Package', isCorrect: false },
				{ answerText: 'Class', isCorrect: false },
			],
		},
		{
			questionText: 'How can you access the state of a component from inside of a member function?',
			answerOptions: [
				{ answerText: 'this.getState()', isCorrect: false },
				{ answerText: 'this.prototype.stateValue', isCorrect: false },
				{ answerText: 'this.state', isCorrect: false },
				{ answerText: 'this.values', isCorrect: true },
			],
		},
		{
			questionText: "Props are __________ into other components",
			answerOptions: [
				{ answerText: 'Injected', isCorrect: false },
				{ answerText: 'Methods', isCorrect: true },
				{ answerText: 'Both', isCorrect: false },
				{ answerText: 'None of these', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following API is a MUST for every ReactJS component?',
			answerOptions: [
				{ answerText: 'getInitialState', isCorrect: false },
				{ answerText: 'render', isCorrect: false },
				{ answerText: 'renderComponent', isCorrect: true },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
	];

        const [currentQuestion, setCurrentQuestion] = useState(0)

        const [showScore, setShowScore] = useState(false)

        const [score, setScore] = useState(0)
        const answerClick = (isCorrect) =>{
            if(isCorrect===true){
                setScore(score + 1);
            }


            const nextQuestion = currentQuestion + 1;
            if(nextQuestion < questions.length){
                setCurrentQuestion(nextQuestion);
            }
            else{
                setShowScore(true)
            }

        }
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption)=> (<button onClick={()=>answerClick(answerOption.isCorrect)}>{answerOption.answerText}</button>))}
					</div>
				</>
			)}
		</div>
	);
}
