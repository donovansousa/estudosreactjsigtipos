
/*
  Os styled components são componentes que já nascem estilizados.
  Eles possuem todas as propriedades de um elemento HTML de forma nativa.
*/

import React from 'react';
import styled from 'styled-components';

// Herança com styled
const radius = styled.button`
   border-radius:2%;
`;

const EstiloBotao = styled(radius)`
    color: red;
    cursor: pointer;

    &:hover {
        opacity: 0.6;
    }
`;

// Criando um input e definando o type na props
const EstiloInput = styled.input`
`;

export function TesteUsandoStyleComponents() {

    return (
        <div>
            <EstiloBotao>
                <h3>Usando styled components - button</h3>
            </EstiloBotao>

            <EstiloInput type={'text'} />

        </div>
    );
};
