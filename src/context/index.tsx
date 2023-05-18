import { ComposeProviders } from './composeProviders';
import UserProvider from './userContext';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <ComposeProviders with={[UserProvider]}>{children}</ComposeProviders>;
};

export default Providers;
