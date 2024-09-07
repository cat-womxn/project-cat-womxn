import { Question } from '../pages/question'
import S from './question.module.css'
import * as m from '@/paraglide/messages'

interface QuestionBodyProps {
  currentQuestion: Question
  handleNextStep: (value: string) => void
}
export default function QuestionBody({ currentQuestion, handleNextStep }: QuestionBodyProps) {
  const handleClick = (value: string) => {
    handleNextStep(value)
  }
  return (
    <>
      <h3 className={S.question}>
        <b>Q.</b> <br />
        {m[currentQuestion.question as keyof typeof m]?.()}
      </h3>
      <div className={S.buttonsWrapper}>
        {currentQuestion.choices.map((choice) => (
          <button key={choice.value} className={S.button} onClick={() => handleClick(choice.value)}>
            {m[choice.answer as keyof typeof m]?.()}
          </button>
        ))}
      </div>
    </>
  )
}
