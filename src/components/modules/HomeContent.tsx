'use client';

import { useRouter } from 'next/navigation';
import { Box, Button, Flex, Input } from '../elements';
import Image from 'next/image';
import { useUser } from '@/hooks/useUser';

const HomeContent: React.FC = () => {
  const router = useRouter();

  const { setUserName } = useUser();

  return (
    <Box
      className={`
        justify-center items-center 
        h-screen
      `}
    >
      <Image
        src="/cerebro-home.png"
        width={100}
        height={100}
        alt="memories"
        className="rounded-md mb-3"
      />
      <span className="text-4xl font-semibold text-white">Quiz da Memória</span>

      <Box className="gap-4 mt-[3rem]">
        <Input
          placeholder="Digite aqui o seu nome:"
          onChange={e => setUserName(e.target.value)}
        />

        <Button onClick={() => router.push('/quiz')}>Iniciar</Button>
      </Box>
    </Box>
  );
};

export default HomeContent;
