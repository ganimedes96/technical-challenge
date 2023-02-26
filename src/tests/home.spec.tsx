import "@testing-library/jest-dom"
import {fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { BrowserRouter } from 'react-router-dom';;
import  {Home}  from '../pages/Home'


describe('Testing page Home', () => {
    beforeEach(() => {
       render(
            <BrowserRouter>
                <Home/>
            </BrowserRouter>
        )
    })
    

    it('Should be able to render the title and paragraphs ', async () => {
      
        expect(screen.getByTestId("about-home")).toBeInTheDocument()
        expect(screen.getByTestId("title")).toBeInTheDocument()
            
    })
    it('Should be able to render the img ', async () => {
      
        expect(screen.getByTestId("img-home")).toBeInTheDocument()    
    })
    
    it('Should be able to render the buttons ', async () => {
      
        expect(screen.getByTestId("users")).toBeInTheDocument()
        expect(screen.getByTestId('professional')).toBeInTheDocument()
            
    })
    it('Should be able to fire event', () => {
      
        const pageUsers = screen.getByTestId("users");
        const pageProfessional = screen.getByTestId("professional")
        fireEvent.click(pageUsers);
        fireEvent.click(pageProfessional)
    
        expect(screen.getByText("Pessoa Usuária")).toBeInTheDocument();
        expect(screen.getByText("Profissional")).toBeInTheDocument()
    })
})