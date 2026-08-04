import { Navigate, Route, Routes } from 'react-router';
import { LoginPage } from '@/pages/Login/LoginPage';
import MainPage from '@/pages/Main/MainPage';
import ProtectLayout from '../layouts/ProtectLayout';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<ProtectLayout forAuth={false} />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route element={<ProtectLayout />}></Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
