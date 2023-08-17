import { render } from "@testing-library/react"
import React from "react"; 
import Button from "."

describe('<Button>', () => {
    it('should render button', () => {
        const { getByText, getByRole } = render(<Button>button</Button>); 

        // eslint-disable-next-line testing-library/prefer-screen-queries
        const buttonElement = getByRole('button'); 
        const buttonTextElement = getByText('button'); 


        expect(buttonElement).toBeInTheDocument();
        expect(buttonTextElement).toBeInTheDocument(); 
    }); 

    it(`should render 'carregando..' text when isloading was passed`, () => {
        const { getByRole } = render (<Button isLoading>button</Button>); 

        const buttonElement = getByRole('button'); 

        expect(buttonElement).toHaveStyle({
            backgroundColor: 'green'
        }); 
    })
})