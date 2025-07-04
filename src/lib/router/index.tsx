import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import { useTypedSelector } from 'src/app/store';
import { MainLayout } from 'src/components/layouts';

// Layouts

// Pages
import { Custom404Page, HelpPage, HomePage } from 'src/pages';
import LoginPage from 'src/pages/login';

function RouterProvider() {
  const { isAuthenticated } = useTypedSelector((state) => state.auth);
  return (
    <Router>
      <Routes>
        {/* Help */}
        <Route path="/help" element={<HelpPage />} />

        {/* Main Layout */}
        <Route
          path="/"
          element={isAuthenticated ? <MainLayout /> : <Navigate to="/login" />}
        >
          <Route path="users" element={<HomePage />} />
          <Route path="tasks" element={<HomePage taskPage />} />
        </Route>

        {/* Auth layout */}
        <Route
          path="/login"
          element={!isAuthenticated ? <LoginPage /> : <Navigate to="/" />}
        />

        {/* 404 */}
        <Route path="*" element={<Custom404Page />} />
      </Routes>
    </Router>
  );
}

export default RouterProvider;
