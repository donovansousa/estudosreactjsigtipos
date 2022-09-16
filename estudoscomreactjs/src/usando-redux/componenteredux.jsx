
/*
    REDUX - INSTALAÇÃO E ENTENDIMENTO

 1 -> Instalar o pacote NPM: npm install --save @reduxjs/toolkit react-redux

 2 -> Definir reducers com createSlice, ex:
 const slice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment: (state) => {
            return state + 1;
        },
        reset: () => {
            return 0;
        },
    },
 });

 3 -> Definir store com configureStore, ex:

const store = configureStore({
    reducer: {
        counter: slice.reducer,
    },
});

4 -> Disparar actions com o dispatch, e ouvir mudanças de estados com o subscribe

*/



import React, { useState } from 'react';
import { store } from './store/store';
import { slice } from './reducers/sliceReducer';
import { ComponenteRedux2 } from './componenteredux2';

export function UsandoComponentRedux(props) {

    const [counter, setCounter] = useState(0);

    // obtem as actions a fim de dar o dispatch
    const { increment } = slice.actions;

    // executa o dispatch com a action
    const incrementar = () => {
        store.dispatch(increment());
    }

    // obtem resposta ouvindo com o subscribe e atualiza o estado do componente
    store.subscribe(() => {
        setCounter(store.getState().counter);
    });



    return (
        <div>
            <h3>REDUX - ATUALIZANDO STORE COM: DISPATCH -> ACTION -> REDUCERS -> STORE</h3>
            <button onClick={incrementar.bind(this)}>Incrementar</button>
            <h4>Componente01 - Redux - {counter}</h4>
            <hr />
            <ComponenteRedux2 />
        </div>
    )
};