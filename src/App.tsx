import { Route, Routes } from 'react-router';
import './App.scss';
import { ProtectRoute } from './components/protect-route/ProtectRoute';
import { Profile } from './pages/profile/Profile';
import { Main } from './pages/main/Main';
import { NotFound } from './pages/not-found/NotFound';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import { ResetPassword } from './pages/reset-password/ResetPassword';
import { Sidebar } from './components/sidebar/Sidebar';
import { useSelector } from './store/store';
import { getUser } from './slices/userSlice';
import { ChatPage } from './pages/chat/ChatPage';
import { Chat } from './components/chat/Chat';

function App() {
  const user = useSelector(getUser);

  return (
    <>
      {user && <Sidebar />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/profile"
          element={
            <ProtectRoute>
              <Profile />
            </ProtectRoute>
          }
        />
        <Route
          path="/chat"
          element={
            <ProtectRoute>
              <ChatPage />
            </ProtectRoute>
          }
        >
          <Route
            path=":id"
            element={
              <ProtectRoute>
                <Chat />
              </ProtectRoute>
            }
          />
        </Route>

        <Route
          path="/login"
          element={
            <ProtectRoute onlyOnAuth>
              <Login />
            </ProtectRoute>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectRoute onlyOnAuth>
              <Register />
            </ProtectRoute>
          }
        />
        <Route
          path="/reset-password"
          element={
            <ProtectRoute onlyOnAuth>
              <ResetPassword />
            </ProtectRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
