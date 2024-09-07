import { useEffect, useMemo, useState } from "react";
import S from "./question.module.css";
import questionData from "@/data/questions.json";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const QuestionBody = dynamic(() => import("./Question.Body"), { ssr: false });

export interface Question {
  id: number;
  question: string;
  choices: {
    answer: string;
    value: string;
  }[];
}

const MIN_WIDTH_PERCENTAGE = 25;

export default function Question() {
  const { questions } = questionData;
  const shuffledQuestions = useMemo(() => shuffleArray(questions), [questions]);

  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [, setResultArr] = useState<string[]>([]);

  useEffect(() => {
    if (progress === 0) {
      setProgress(MIN_WIDTH_PERCENTAGE);
    }
  }, []);

  const handleNextStep = (value: string) => {
    setResultArr((prevArr) => {
      const newArr = [...prevArr, value];
      const isLastQuestion = newArr.length === questions.length;

      if (isLastQuestion) {
        const type = sortResultType(newArr);
        void router.push(`/result/${type}`);
        return newArr;
      }

      updateProgress();
      return newArr;
    });
  };

  const updateProgress = () => {
    setProgress((prev) => prev + MIN_WIDTH_PERCENTAGE);
    setCurrentIndex((prev) => prev + 1);
  };

  const currentQuestion = shuffledQuestions[currentIndex];

  return (
    <div className={S.container}>
      <main className={`${S.questionContainer} card-container`}>
        <div className={S.defaultProgressBar}>
          <div className={S.progressBar} style={{ width: `${progress}%` }} />
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

function sortResultType(result: string[]): string {
  const orderMap: { [key: string]: number } = {
    D: 0,
    I: 0,
    B: 1,
    F: 1,
    A: 2,
    E: 2,
    S: 3,
    L: 3,
  };

  return result.sort((a, b) => orderMap[a] - orderMap[b]).join("");
}
