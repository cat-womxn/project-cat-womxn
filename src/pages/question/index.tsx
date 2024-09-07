import { useMemo, useState } from "react";
import styles from "./question.module.css";
import questionData from "@/data/questions.json";

import dynamic from "next/dynamic";

const QuestionBody = dynamic(() => import("./Question.Body"), { ssr: false });

export interface Question {
  id: number;
  question: string;
  choices: {
    answer: string;
    value: string;
  }[];
}

export default function Question() {
  const { questions } = questionData;
  const shuffledQuestions = useMemo(() => shuffleArray(questions), [questions]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(25);

  const handleNextStep = () => {
    if (progress >= 100 || currentIndex === questions.length) return;

    setProgress((prev) => prev + 25);
    setCurrentIndex((prev) => prev + 1);
  };

  const currentQuestion = shuffledQuestions[currentIndex];

  return (
    <div className={styles.container}>
      <main className={styles.questionContainer}>
        <div className={styles.defaultProgressBar}>
          <div
            className={styles.progressBar}
            style={{ width: `${progress}%` }}
          />
        </div>
        <QuestionBody
          currentQuestion={currentQuestion}
          handleNextStep={handleNextStep}
        />
      </main>
    </div>
  );
}

function shuffleArray(array: Question[]) {
  return array.sort(() => Math.random() - 0.5);
}
