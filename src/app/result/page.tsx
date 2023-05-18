'use client';

import { Box } from '@/components';
import { useAnswer } from '@/hooks/useAnswer';

import { useUser } from '@/hooks/useUser';

export default function Result() {
  const { userName } = useUser();
  const { answers } = useAnswer();

  const countResult = answers?.filter(answer => answer?.isCorrect)?.length;

  return (
    <Box className="items-center justify-center h-screen px-10">
      {countResult === 0 && (
        <p className="text-white text-5xl font-semibold break-words text-center">
          Que burro da 0 pra ele
        </p>
      )}

      {countResult > 0 && countResult < 5 && (
        <p className="text-white text-5xl font-semibold break-words text-center">
          TA BOM NÉ {userName}, PELO MENOS NÃO FICOU DE DP
        </p>
      )}

      {countResult === 5 && (
        <p className="text-white text-5xl font-semibold break-words text-center">
          EITA {userName}, GABARITOU
        </p>
      )}
    </Box>
  );
}
