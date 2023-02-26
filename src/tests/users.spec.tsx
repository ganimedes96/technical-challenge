import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { BrowserRouter } from 'react-router-dom';import { Users } from "../pages/Users";
;

describe("", () => {
    beforeEach(() => {
        render(
             <BrowserRouter>
                 <Users/>
             </BrowserRouter>
         )
     })
    it('Should be able to render the title and paragraphs ', async () => {
        expect(screen.getByTestId("users-title")).toBeInTheDocument()
        expect(screen.getByTestId("users-paragraph")).toBeInTheDocument()
    })
    it('Should be able to render the img ', async () => {
      
        expect(screen.getByTestId("img-users")).toBeInTheDocument()    
    })
})