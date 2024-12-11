import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../Loader/Loader";
import Navigation from "../Navigation/Navigation";

const MainLayout = lazy(() => import("../MainLayout/MainLayout"));
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage"));

const App = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<Loader />}>
      {location.pathname !== "/" && <Navigation />}
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
