
import { render, screen } from '@testing-library/react';
import { ComponenteParaTestes } from './componentparatestes';

// escreve o teste
describe('dado a renderização do componenteparatestes, como desenvolvedor,', () => {

    // para cada teste unitário, renderiza o componente
    beforeEach(function () {
        render(<ComponenteParaTestes />);
    });

    // cria a função
    it('desejo obter o titulo Donovan, quando executado o teste unitário', function (done) {

        // arrange
        const texto = screen.getByText("Donovan");

        // act/assert
        expect(texto.textContent).toEqual("Donovan"); // valor esperado
        expect(screen.queryByText("Donovan")).not.toBeNull();
        expect(texto.tagName.toLowerCase()).toBe("h3"); // tag esperada
        done();
    });

    it('desejo obter o titulo Donovan como minusculo, quando executado o teste unitário', function (done) {

        // mocka a função jest.fn()
        const funcao = jest.fn((texto) => texto.toLocaleLowerCase());

        const texto = funcao(screen.getByText("Donovan").textContent);
        expect(texto).toEqual("donovan");

        // verifica se a função executou 1 vez
        expect(funcao).toBeCalledTimes(1);

        expect.assertions(2); // 2 asserts realizados

        done();
    });


});
