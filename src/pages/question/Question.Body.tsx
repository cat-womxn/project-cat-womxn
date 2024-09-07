import { Question } from ".";
import S from "./question.module.css";

interface QuestionBodyProps {
  currentQuestion: Question;
  handleNextStep: (value: string) => void;
}
export default function QuestionBody({
  currentQuestion,
  handleNextStep,
}: QuestionBodyProps) {
  const handleClick = (value: string) => {
    handleNextStep(value);
  };
  return (
    <>
      <h3 className={S.question}>
        <b>Q.</b> <br />
        {currentQuestion.question}
      </h3>
      <div className={S.buttonsWrapper}>
        {currentQuestion.choices.map((choice) => (
          <button
            key={choice.value}
            className={S.button}
            onClick={() => handleClick(choice.value)}
          >
            {choice.answer}
          </button>
        ))}
      </div>
    </>
  );
}
