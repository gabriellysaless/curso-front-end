import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { TarefasProvider } from './contexts/TarefasContext.jsx';

const root = document.getElementById('root');

createRoot(root).render(
    <TarefasProvider>
        <App/>
    </TarefasProvider>
);
