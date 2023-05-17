'use client';

import Image from 'next/image';

import { Box, Card, Flex } from '@/components';

export default function Quiz() {
  return (
    <Box className="justify-end items-center h-screen">
      <span className="text-4xl font-semibold text-white mb-5">Quiz da Memória</span>

      <Flex className="mb-5 gap-4">
        <Box className="rounded-full w-[2rem] h-[2rem] border-white border-solid border-2 justify-center items-center text-white">
          1
        </Box>
        <Box className="rounded-full w-[2rem] h-[2rem] border-white border-solid border-2 justify-center items-center text-white">
          2
        </Box>
        <Box className="rounded-full w-[2rem] h-[2rem] border-white border-solid border-2 justify-center items-center text-white">
          3
        </Box>
        <Box className="rounded-full w-[2rem] h-[2rem] border-white border-solid border-2 justify-center items-center text-white">
          4
        </Box>
      </Flex>

      <Card className="h-4/5 w-80 mb-8 px-5">
        <Box className="items-center">
          <Image
            src="/divertidamente-quiz.png"
            width={200}
            height={100}
            alt="divertidamente"
            className="rounded-md mb-3"
          />
          <span className="text-xl font-medium">
            1- De acordo com o vídeo e no contexto das aulas passadas, as memórias base da
            personagem são:
          </span>
        </Box>

        <Box className="gap-3 mt-8 w-full">
          <Box className="w-full rounded-full border-solid border-2 border-gray-300 p-4">
            Semâticas
          </Box>
          <Box className="w-full rounded-full border-solid border-2 border-gray-300 p-4">
            Prospectivas
          </Box>
          <Box className="w-full rounded-full border-solid border-2 border-gray-300 p-4">
            Episódicas
          </Box>
          <Box className="w-full rounded-full border-solid border-2 border-gray-300 p-4">
            Explícitas
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
