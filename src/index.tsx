declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY_PIXABAY: string;
    }
  }
}
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './components/app/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
