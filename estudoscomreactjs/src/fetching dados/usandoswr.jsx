import React from 'react';
import useSWR from 'swr';

/*
 O SWR é uma técnica que primeiro manda o que ta no cache (stale), 
para depois mandar o que ta no servidor (revalidate).
*/

const minhaFuncaoFetcher = (...args) => fetch(...args).then(res => res.json());

export function UsandoSwr(props) {

    const { data, error } = useSWR('https://viacep.com.br/ws/26327270/json/', minhaFuncaoFetcher,
        {
            refreshInterval: 1000,
            revalidateOnReconnect: true
        });

    return (
        <div>
            <h3>Usando SWR:</h3>
            <span>Cep: {data?.cep}</span>
        </div>
    );
};