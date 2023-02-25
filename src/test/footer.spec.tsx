import "@testing-library/jest-dom"
import {fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { BrowserRouter } from 'react-router-dom';;
import { Header } from "../components/Header";
import { Home } from "../pages/Home";
import { Users } from "../pages/Users";
import { Professional } from "../pages/Professional";
import { Footer } from "../components/Footer";

describe('Testing page Home', () => {
    beforeEach(() => {
       render(
            <BrowserRouter>
                <Home/>
                <Users/>
                <Professional/>
                <Footer/>
            </BrowserRouter>
        )
    })
    it('Should be able to render components Footer ', async () => {
          
       
        expect(screen.getByTestId("home-footer")).toBeInTheDocument()
        expect(screen.getByTestId("users-footer")).toBeInTheDocument()
        expect(screen.getByTestId("professional-footer")).toBeInTheDocument()
        expect(screen.getByText("Desafio Front-end Lacrei")).toBeInTheDocument()
    })
    it('Should be able to render components Footer img', async () => {
                 
        expect(screen.getByTestId("img-face")).toBeInTheDocument()
        expect(screen.getByTestId("img-insta")).toBeInTheDocument()
        expect(screen.getByTestId("img-linke")).toBeInTheDocument()
    })
    it('Should be able to fire event in navigate links', () => {
      
        const pageHome = screen.getByTestId("home-footer");
        const pageUsers = screen.getByTestId("users-footer")
        const pageProfessional = screen.getByTestId("professional-footer")
        fireEvent.click(pageHome)
        fireEvent.click(pageUsers);
        fireEvent.click(pageProfessional)
    
        expect(screen.getByText("Boas vindas a Lacrei Saúde")).toBeInTheDocument()
        expect(screen.getByTestId("users-title")).toBeInTheDocument();
        expect(screen.getByTestId("professional-title")).toBeInTheDocument()
    })
})  