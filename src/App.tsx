import { Navigate, Route, Routes } from 'react-router';
import { lazy } from 'react';
import './App.scss';
import { MainLayout } from './layouts/MainLayout';
import { NotFound } from './pages/NotFound';
import { Loading } from './components/Loading';
const Login = lazy(() => import('@/pages/Auth/Login'));
const Game = lazy(() => import('@/pages/Game'));
const ProtectLayout = lazy(() => import('./layouts/Protect'));
const CharactersList = lazy(() => import('@/pages/CharactersList'));
const Character = lazy(() => import('@/pages/Character'));
const LayoutSidebar = lazy(() => import('@/layouts/Sidebar'));
const Roles = lazy(() => import('@/pages/Roles'));
const Search = lazy(() => import('@/pages/Search'));
const Profile = lazy(() => import('@/pages/Profile'));
const Register = lazy(() => import('@/pages/Auth/Register'));

function App() {
  return (
    <Routes>
      <Route element={<ProtectLayout notAuth={true} />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route element={<ProtectLayout />}>
        <Route element={<LayoutSidebar />}>
          <Route element={<MainLayout />}>
            <Route path="search" element={<Search />} />
            <Route path=":userID">
              <Route index element={<Profile />} />
              <Route path="characters" element={<CharactersList />} />
              <Route path="characters/:charID" element={<Character />} />
            </Route>
            <Route path="loading" element={<Loading />} />

            <Route path="roles/:id" element={<Roles />} />
          </Route>
        </Route>

        <Route path="games" element={<MainLayout />}>
          <Route index element={<NotFound />} />
          <Route path=":gameID" element={<Game />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
