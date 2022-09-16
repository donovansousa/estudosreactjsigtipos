
import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { contexto as MeuContexto } from '../contexto';

function Component01() {

    const contexto = useContext(MeuContexto);
    const { sobrenome } = useParams();

    return (
        <div>
            <h3>Componente 01 - {contexto.nome}</h3>

            <div style={{ display: sobrenome != null ? '' : 'none' }}>
                <h3>O sobrenome é: <span style={{ color: 'red' }}> {sobrenome}</span></h3>
            </div>

        </div>
    )
}

export {
    Component01
}