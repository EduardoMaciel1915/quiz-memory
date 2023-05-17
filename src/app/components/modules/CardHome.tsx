'use client';

import { useRouter } from 'next/navigation';
import { Box, Button } from '../elements';

const CardHome: React.FC = () => {
  const router = useRouter();

  return (
    <Box
      className={`
        justify-center items-center 
        h-screen
      `}
    >
      <span className="text-3xl font-semibold text-white">Quiz da Memória</span>

      <Button onClick={() => router.push('/quiz')}>Iniciar</Button>
    </Box>
  );
};

export default CardHome;
