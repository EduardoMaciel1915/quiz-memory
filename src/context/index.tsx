import AnswerProvider from './answerContext';
import { ComposeProviders } from './composeProviders';
import UserProvider from './userContext';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ComposeProviders with={[UserProvider, AnswerProvider]}>{children}</ComposeProviders>
  );
};

export default Providers;
