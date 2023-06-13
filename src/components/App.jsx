import { Layout } from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { authSelectors } from 'redux/auth/auth-selectors';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    // если рефрешим, тогда строка, что загружаются  данные, иначе(если не рефрешим) - рендерим разметку
    isRefreshing ? (
      'Fetching user data....'
    ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={RegisterPage}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={ContactsPage} redirectTo="/login" />
            }
          />
        </Route>
      </Routes>
    )
  );
};
