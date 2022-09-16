
import React from 'react';

class UsandoClassComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            frutas: [{ nome: 'Banana' }, { nome: 'Maçã' }, { nome: 'Pêra' }],
            nome: '',
            idade: 0,
        };
    }

    componentDidMount() {
        console.log('React.Component - componentDidMount');
    }

    componentWillUnmount() {
        console.log('React.Component - componentWillUnmount');
    }

    componentDidUpdate() {
        console.log('React.Component - componentDidUpdate');
    }

    componentDidCatch() {
        console.log('React.Component - componentDidCatch');
    }

    atualizarArrayDeFrutas(e) {
        let frutas = this.state.frutas;
        frutas.push({ nome: 'Uva' });
        this.setState(frutas);
    }

    atualizarIdade(idade) {
        this.setState({ idade }, function () {
            console.log(`Idade: ${this.state.idade}`);
        })
    }

    render() {

        const { idade } = this.state;

        return (
            <div>
                <h3 style={{ cursor: 'default', userSelect: 'none' }}>Usando Class Component com React.Component</h3>

                <p>Listagem de frutas:</p>
                <ul>
                    {
                        this.state.frutas.map(f => <li key={f.nome}>{f.nome}</li>)
                    }
                </ul>

                <hr />
                <input type={'text'} placeholder={'Informe o nome'} onChange={(e) => this.setState({ nome: e.target.value })} />
                <b style={{ marginLeft: '1%' }}><span>{this.state.nome}</span></b>
                <button onClick={this.atualizarArrayDeFrutas.bind(this)}>Atualizar array de frutas</button>
                <p>Idade: {this.state.idade} - {idade}</p>
                <button onClick={this.atualizarIdade.bind(this, 27)}>Atualizar idade</button>

            </div>
        )
    }
}

export {
    UsandoClassComponent
}