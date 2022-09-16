
import React, { useReducer, useState } from 'react';

function reducer(state, action = { type: '' }) {

    switch (action.type) {

        case 'increment':
            state++;
            return state;

        case 'decrement':
            state--;
            return state;

        default:
            return state;
    };
};

export function UsandoReducer() {

    const [valor, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h3>{valor}</h3>
            <br />
            <button onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrementar</button>
        </div>
    )
};