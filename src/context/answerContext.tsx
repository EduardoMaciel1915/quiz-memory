import { quizQuestions } from '@/app/quiz/quizQuestion';
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface AnswerProps {
  children: ReactNode;
}

interface AnswerProviderData {
  answers: QuizOption[];
  setAnswers: Dispatch<SetStateAction<QuizOption[]>>;
}

export const AnswerContext = createContext<AnswerProviderData>({} as AnswerProviderData);

const AnswerProvider = ({ children }: AnswerProps) => {
  const [answers, setAnswers] = useState<QuizOption[]>([]);

  return (
    <AnswerContext.Provider value={{ setAnswers, answers }}>
      {children}
    </AnswerContext.Provider>
  );
};
export default AnswerProvider;
