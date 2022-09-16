
import React, { useContext, useEffect, useRef } from 'react';
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { contexto } from '../contexto';

import { Component01 } from './component01';
import { Component02 } from './component02';
import { UsandoMemo } from './usandomemo';

export function UsandoRoute() {

    const rota01 = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        rota01.current.click();
    }, []);

    return (

        <div>
            <contexto.Provider value={{ nome: 'Donovan' }} >
                {/* <BrowserRouter> -- Foi colocado no index.js, devido ao useNavigate() */}

                <Link ref={rota01} to={'/rota01'}>Ir até rota01</Link>
                <Link to={'/rota01/Muniz'}>Ir até rota01 com sobrenome</Link>
                <Link to={'/rota02'}>Ir até rota02</Link>
                <Link to={'/usandomemo'}>Ir até UsandoMemo</Link>

                <button onClick={(e) => navigate('/rota02', { replace: true })} style={{ display: 'block' }}>Ir até uma determina rota com</button>

                <Routes>
                    <Route exact key={'component01'} path={'/rota01'} element={<Component01 />} />
                    <Route exact key={'component01'} path={'/rota01/:sobrenome'} element={<Component01 />} />
                    <Route exact key={'component02'} path={'/rota02'} element={<Component02 />} />
                    <Route exact key={'usandomemo'} path={'/usandomemo'} element={<UsandoMemo />} />
                </Routes>
                {/* </BrowserRouter> */}
            </contexto.Provider>
        </div>
    )
};
