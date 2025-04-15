import { Route, Routes } from 'react-router';
import './App.scss';
import { ProtectRoute } from './components/protect-route/ProtectRoute';
import { Main } from './pages/main/Main';
import { NotFound } from './pages/not-found/NotFound';
import { ChatPage } from './pages/chat/ChatPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route
        path="/chat"
        element={
          <ProtectRoute>
            <ChatPage />
          </ProtectRoute>
        }
      ></Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
