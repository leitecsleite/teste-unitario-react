import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import nock from 'nock';
import TodoApp from './TodoApp';
import faker from 'faker';
import mocker from 'mocker-data-generator';

describe('TodoApp Integration Test', () => {
  it('should fetch and display todos correctly', async () => {
    // Gerar dados mockados usando o mocker
    const todosData = mocker()
      .schema('todo', {
        text: faker.lorem.sentence(),
        id: faker.random.uuid(),
      })
      .buildSync(2);

    // Simula a resposta da API externa
    nock('/api')
      .get('/todos')
      .reply(200, todosData);

    // Renderiza o componente
    render(<TodoApp />);

    // Aguarda a renderização dos itens
    await waitFor(() => {
      const todoItems = screen.getAllByRole('listitem');
      expect(todoItems).toHaveLength(todosData.length);

      todosData.forEach((todo, index) => {
        expect(todoItems[index]).toHaveTextContent(todo.text);
      });
    });
  });
});