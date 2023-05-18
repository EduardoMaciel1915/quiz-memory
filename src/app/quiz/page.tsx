'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Box, QuizContent, Flex } from '@/components';

import { quizQuestions } from './quizQuestion';
import { useAnswer } from '@/hooks/useAnswer';

export default function Quiz() {
  const router = useRouter();
  const [questionActive, setQuestionActive] = useState<number>(1);

  const { answers, setAnswers } = useAnswer();

  const colorCircle = (questionKey: number) => {
    if (answers?.[questionKey - 1]?.isCorrect) {
      return 'bg-green-400';
    }

    if (!answers?.[questionKey - 1]?.isCorrect && questionKey < questionActive) {
      return 'bg-red-400';
    }
  };

  const handleNextQuestion = (option: QuizOption) => {
    setAnswers(answers => [...answers, option]);

    if (questionActive === quizQuestions?.length) {
      router.push('/result');

      return;
    }

    setQuestionActive(question => question + 1);
  };

  return (
    <Box className="justify-end items-center h-screen">
      <span className="text-4xl font-semibold text-white mb-5">Quiz da Memória</span>

      <Flex className="mb-5 gap-4">
        {quizQuestions?.map(question => (
          <Box
            key={question?.key}
            className={`rounded-full w-[2rem] h-[2rem] border-white border-solid border-2 justify-center items-center text-white ${colorCircle(
              question?.key
            )}`}
          >
            {question?.key}
          </Box>
        ))}
      </Flex>

      <QuizContent
        question={quizQuestions?.[questionActive - 1]}
        handleNextQuestion={handleNextQuestion}
      />
    </Box>
  );
}
