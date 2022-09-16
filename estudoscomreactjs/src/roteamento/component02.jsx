
import React, { useContext } from 'react';
import { contexto as MeuContexto } from '../contexto';

function Component02() {
    const contexto = useContext(MeuContexto);

    return (
        <div>
            <h3>Componente 02 - {contexto.nome}</h3>
        </div>
    )
}

export {
    Component02
}