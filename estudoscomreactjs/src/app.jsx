
import React, { useEffect, useState } from 'react';
import './app.css';
import { UsandoClassComponent } from './classcomponents';
import { UsandoRoute } from './roteamento/route';
import { UsandoReducer } from './roteamento/usandoreducer';
import { TesteUsandoStyleComponents } from './usando-stylecomponents/usandostylecomponents';
import { UsandoSwr } from './fetching dados/usandoswr';
import { UsandoComponentRedux } from './usando-redux/componenteredux';

export function App(props) {

    let [contador, setContador] = useState(0);
    let [texto, setTexto] = useState('');

    useEffect(() => {
        console.log('onload!');
        props.callback('AAAAAA');
    }, []);

    useEffect(() => {
        console.log(`Houve atualização do contador para: ${contador}`);
    }, [contador]);

    const dizerOla = () => alert('Olá!');

    const handler = (e) => setTexto(e.target.value);

    return (
        <div>
            <div className='div'>
                <h3>Olá Mundo!</h3>
                <button onClick={dizerOla.bind(this)}>Dizer olá</button>
            </div>

            <div className='div'>
                <button onClick={(e) => setContador(contador + 1)}>Realizar contagem - {contador}</button>
            </div>

            <div className='div'>
                <input type={'text'} onChange={handler.bind(this)} />
                {texto}
            </div>

            <div className='div'>
                <b>Usando props - Propriedade: {props.nome}</b>
            </div>

            <div className='div'>
                <b>Usando style - Propriedade: <span style={{ color: 'red', cursor: 'default', userSelect: 'none' }}>Dsousa</span></b>
            </div>

            <div className='div'>
                <UsandoClassComponent />
            </div>

            <div className='div'>
                <label htmlFor='nome'>Nome</label>
                <input style={{ marginLeft: '1%' }} type={'text'} id={'nome'} />
            </div>

            <UsandoRoute />

            <UsandoReducer />

            <TesteUsandoStyleComponents />

            <UsandoSwr />

            <UsandoComponentRedux />

        </div>
    );
};