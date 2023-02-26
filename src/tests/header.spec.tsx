import "@testing-library/jest-dom"
import {fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { BrowserRouter } from 'react-router-dom';;
import { Header } from "../components/Header";
import { Home } from "../pages/Home";
import { Users } from "../pages/Users";
import { Professional } from "../pages/Professional";

describe('Testing page Home', () => {
    beforeEach(() => {
       render(
            <BrowserRouter>
                <Home/>
                <Users/>
                <Professional/>
                <Header/>
            </BrowserRouter>
        )
    })
    it('Should be able to render components header ', async () => {
          
        expect(screen.getByTestId("logo")).toBeInTheDocument()
        expect(screen.getByTestId("home-header")).toBeInTheDocument()
        expect(screen.getByTestId("users-header")).toBeInTheDocument()
        expect(screen.getByTestId("professional-header")).toBeInTheDocument()
            
    })
    it('Should be able to fire event in navigate links', () => {
      
        const pageHome = screen.getByTestId("home-header");
        const pageUsers = screen.getByTestId("users-header")
        const pageProfessional = screen.getByTestId("professional-header")
        fireEvent.click(pageHome)
        fireEvent.click(pageUsers);
        fireEvent.click(pageProfessional)
    
        expect(screen.getByText("Boas vindas a Lacrei Saúde")).toBeInTheDocument()
        expect(screen.getByTestId("users-title")).toBeInTheDocument();
        expect(screen.getByTestId("professional-title")).toBeInTheDocument()
    })
})  
