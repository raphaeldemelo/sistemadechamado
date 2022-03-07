import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import AuthProvider from './contexts/auth';
import { ToastContainer } from 'react-toastify';


export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
        />
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
}

