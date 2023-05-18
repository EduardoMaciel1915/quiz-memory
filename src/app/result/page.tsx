'use client';

import { Box } from '@/components';

import { useUser } from '@/hooks/useUser';

export default function Result() {
  const { userName } = useUser();

  return (
    <Box className="items-center justify-center h-screen px-10">
      <p className="text-white text-5xl font-semibold break-words text-center">
        PARABÉNS {userName}, NÃO FICOU DE DP
      </p>
    </Box>
  );
}
