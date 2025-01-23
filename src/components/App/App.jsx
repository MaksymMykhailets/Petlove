import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";
import PrivateRoute from "../PrivateRoute";

const MainLayout = lazy(() => import("../MainLayout/MainLayout"));
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ProfilePage = lazy(() => import("../../pages/ProfilePage/ProfilePage"));
const NewsPage = lazy(() => import("../../pages/NewsPage/NewsPage"));
const NoticesPage = lazy(() => import("../../pages/NoticesPage/NoticesPage"));

const App = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<Loader />}>
      {location.pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/notices" element={<NoticesPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;