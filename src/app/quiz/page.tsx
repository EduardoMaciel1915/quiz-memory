'use client';

import { useState } from 'react';

import { Box, QuizContent, Flex } from '@/components';
import { useRouter } from 'next/navigation';

export default function Quiz() {
  const router = useRouter();
  const [questionActive, setQuestionActive] = useState<number>(1);

  const [answers, setAnswers] = useState<number[]>([]);

  const colorCircle = (questionKey: number) => {
    if (answers?.[questionKey - 1] === quizQuestions?.[questionKey - 1]?.answer) {
      return 'bg-green-400';
    }

    if (
      answers?.[questionKey - 1] !== quizQuestions?.[questionKey - 1]?.answer &&
      questionKey < questionActive
    ) {
      return 'bg-red-400';
    }
  };

  const handleNextQuestion = (option: QuizOption) => {
    setAnswers(answers => [...answers, option.key]);

    if (questionActive === quizQuestions?.length) {
      router.push('/result');

      return;
    }

    setQuestionActive(question => question + 1);
  };

  const quizQuestions: QuizQuestion[] = [
    {
      key: 1,
      label:
        'De acordo com o vídeo e no contexto das aulas passadas, as memórias base da personagem são:',
      image: '/divertidamente-quiz.png',
      options: [
        {
          key: 1,
          label: 'Semâticas',
        },
        {
          key: 2,
          label: 'Prospectivas',
        },
        {
          key: 3,
          label: 'Episódicas',
        },
        {
          key: 4,
          label: 'Explícitas',
        },
      ],
      answer: 3,
    },
    {
      key: 2,
      label: 'De qual memória pertence a habilidade da garota:',
      image: '/menina.jpg',
      options: [
        {
          key: 1,
          label: 'Memória falsa',
        },
        {
          key: 2,
          label: 'Memória operande',
        },
        {
          key: 3,
          label: 'Memória semântica',
        },
        {
          key: 4,
          label: 'Memória implícita',
        },
      ],
      answer: 4,
    },
    {
      key: 3,
      label: 'Qual imagem está o Pikachu correto?',
      image: '/pikachu.jpg',
      options: [
        {
          key: 1,
          label: 'A',
        },
        {
          key: 2,
          label: 'B',
        },
      ],
      answer: 2,
    },
    {
      key: 4,
      label: 'Qual perda de memória está relacionada a amnésia da Dory?',
      image: '/dory.jpg',
      options: [
        {
          key: 1,
          label: 'Prospectiva',
        },
        {
          key: 2,
          label: 'Amnésia anterograda',
        },
        {
          key: 3,
          label: 'Perda de memória recente',
        },
        {
          key: 4,
          label: 'Amnésia retrograda',
        },
      ],
      answer: 2,
    },
    {
      key: 5,
      label: 'Que animal é esse?',
      image: '/caty.png',
      options: [
        {
          key: 1,
          label: 'Gato',
        },
        {
          key: 2,
          label: 'Cachorro',
        },
        {
          key: 3,
          label: 'Rato',
        },
        {
          key: 4,
          label: 'Pato',
        },
      ],
      answer: 1,
    },
  ];

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
