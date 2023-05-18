export as namespace module;

interface QuizQuestion {
  key: number;
  label: string;
  image: string;
  options: QuizOption[];
  answer: number;
}

interface QuizOption {
  key: number;
  label: string;
  isCorrect: boolean;
}
