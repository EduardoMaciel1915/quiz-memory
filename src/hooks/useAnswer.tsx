import { useContext } from 'react';

import { AnswerContext } from '@/context/answerContext';

export const useAnswer = () => useContext(AnswerContext);
