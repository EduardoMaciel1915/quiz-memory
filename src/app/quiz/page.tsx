'use client';

import Image from 'next/image';
import { Box, Card } from '../components';

export default function Quiz() {
  return (
    <Box className="justify-center items-center h-screen">
      <Image
        src="/coreMemories.png"
        width={315}
        height={100}
        alt="memories"
        className="rounded-md mb-3"
      />
      <span
        className={`
          text-lg font-semibold text-white uppercase 
          px-5 py-5
        `}
      >
        De acordo com o vídeo e no contexto das aulas passadas, as memórias base da
        personagem são:
      </span>

      <Box className="gap-4 w-80">
        <Card className="p-4 w-full">A: ALTERNATIVA</Card>
        <Card className="p-4 w-full">B: ALTERNATIVA</Card>
        <Card className="p-4 w-full">C: ALTERNATIVA</Card>
      </Box>
    </Box>
  );
}
