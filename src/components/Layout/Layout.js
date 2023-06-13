import AppBar from 'components/AppBar/AppBar';
import { Container } from './Layout.styled';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      {/* <Suspense fallback={null}> */}
      <Outlet />
      {/* </Suspense> */}
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </Container>
  );
};
