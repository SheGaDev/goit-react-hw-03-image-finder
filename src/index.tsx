declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY_PIXABAY: string;
    }
  }
}
import 'dotenv/config';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
