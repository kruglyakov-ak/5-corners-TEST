import { Header } from '../common';

const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default MainLayout;
