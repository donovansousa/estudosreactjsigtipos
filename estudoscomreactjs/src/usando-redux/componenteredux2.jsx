
import React, { useState } from 'react';
import { store } from './store/store';

export function ComponenteRedux2(props) {

    const [contador, setContador] = useState(0);

    store.subscribe(() => {
        setContador(store.getState().counter);
    });

    return (
        <div>
            <h4>Componente02 - Redux -   {contador}</h4>
        </div>
    )

};