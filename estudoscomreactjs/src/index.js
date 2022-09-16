
import React from 'react';
import ReactDOM from 'react-dom'; // pacote antigo para renderizar aplicação de forma inicial
import { createRoot } from 'react-dom/client'; // pacote novo
import { BrowserRouter } from 'react-router-dom';

import { App } from './app';

// JEITO ANTIGO
// const root = document.getElementById('root');
// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>, root);

// JEITO NOVO
const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App nome={"Donovan"} callback={(valor) => console.log(valor)} />
        </BrowserRouter>
    </React.StrictMode>);
