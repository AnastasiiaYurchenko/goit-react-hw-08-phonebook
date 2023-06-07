import AppBar from 'components/AppBar/AppBar';
import { Container } from './Layout.styled';
import { Outlet } from 'react-router-dom';

// export const Layout = ({ children }) => {
//   return <Container>{children}</Container>;
// };

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      {/* <Suspense fallback={null}> */}
      <Outlet />
      {/* </Suspense> */}
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
};
