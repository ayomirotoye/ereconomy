import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRoute from './routes/AppRoute';

function App() {
  return (
    <main className="main">
        <AppRoute />
        <ToastContainer limit={1} />
    </main>
  );
}

export default App;
