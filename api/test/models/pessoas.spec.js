import {
    describe, expect, it, jest,
} from '@jest/globals';
import pessoas from '../../models/pessoas.js';

describe('Tetando o modelo Editora', () => {
    const objetoPessoa = {
        nome: 'Victor',
        ativo: true,
        email: 'victor@teste.com',
        role: 'dev'
    };

    it('Deve instanciar uma nova editora', () => {
        const novaPessoa = new pessoas(objetoPessoa);

        expect(novaPessoa).toEqual(
            expect.objectContaining(objetoPessoa),
        );
    })

})