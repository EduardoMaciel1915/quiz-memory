'use client';

import Image from 'next/image';
import { Card, Box } from '../elements';

interface IQuizContent {
  question: QuizQuestion;
  handleNextQuestion: () => void;
}

const QuizContent: React.FC<IQuizContent> = ({ question, handleNextQuestion }) => {
  return (
    <Card className="h-4/5 w-4/5 mb-6 px-5">
      <Box className="items-center">
        <Image
          src={question?.image}
          width={200}
          height={100}
          alt="divertidamente"
          className="rounded-md my-3"
        />
        <span className="text-xl font-medium">
          {question?.key + ') ' + question?.label}
        </span>
      </Box>

      <Box className="gap-3 mt-4 w-full">
        {question?.options?.map((option, key) => (
          <Box
            key={key}
            className="w-full rounded-full border-solid border-2 border-gray-300 p-4"
            onClick={handleNextQuestion}
          >
            {option?.label}
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default QuizContent;
