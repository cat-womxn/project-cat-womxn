import { Question } from ".";
import styles from "./question.module.css";

interface QuestionBodyProps {
  currentQuestion: Question;
  handleNextStep: () => void;
}
export default function QuestionBody({
  currentQuestion,
  handleNextStep,
}: QuestionBodyProps) {
  return (
    <>
      <h3 className={styles.question}>
        <b>Q.</b> <br />
        {currentQuestion.question}
      </h3>
      <div className={styles.buttonsWrapper}>
        {currentQuestion.choices.map((choice) => (
          <button
            key={choice.value}
            className={styles.button}
            onClick={handleNextStep}
          >
            {choice.answer}
          </button>
        ))}
      </div>
    </>
  );
}
