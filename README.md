# Button Component Tests

Este repositório contém testes para o componente `<Button>` usando a biblioteca `@testing-library/react`.

## Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados no seu sistema.

## Instalação

Clone o repositório e instale as dependências:

```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
npm install
```
## Executando os Testes

```
npm test
```

🧪 Testing Enthusiast! 🧪

As a passionate developer, I believe that writing robust and reliable code is crucial. That's why I enjoy exploring the world of testing and automating the validation process for my projects. Here's an example of how I use the `@testing-library/react` library to test a React component:

```javascript
import { render } from "@testing-library/react";
import React from "react";
import Button from ".";

describe('<Button>', () => {
    it('should render button', () => {
        const { getByText, getByRole } = render(<Button>button</Button>);

        // Verifying basic rendering
        const buttonElement = getByRole('button');
        const buttonTextElement = getByText('button');

        expect(buttonElement).toBeInTheDocument();
        expect(buttonTextElement).toBeInTheDocument();
    });

    it('should render the button with background color green by default', () => {
        const { getByRole } = render(<Button isLoading>button</Button>);

        // Verifying styling when isLoading is set
        const buttonElement = getByRole('button');

        expect(buttonElement).toHaveStyle({
            backgroundColor: 'green'
        });
    });
});

```


