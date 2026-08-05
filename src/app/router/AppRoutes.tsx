import { Navigate, Route, Routes } from 'react-router';
import { LoginPage } from '@/pages/Login/LoginPage';
import MainPage from '@/pages/Main/MainPage';
import { ProfilePage } from '@/pages/Profile/ProfilePage';
import { RegistrationPage } from '@/pages/Registration/RegistrationPage';
import ProtectLayout from '../layouts/ProtectLayout';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />

      <Route element={<ProtectLayout forAuth={true} />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Route>

      <Route element={<ProtectLayout forAuth={false} />}>
        <Route path="/profile" element={<ProfilePage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
