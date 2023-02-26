import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { BrowserRouter } from 'react-router-dom';import { Users } from "../pages/Users";
import { Professional } from "../pages/Professional";
;

describe("", () => {
    beforeEach(() => {
        render(
             <BrowserRouter>
                 <Professional/>
             </BrowserRouter>
         )
     })
    it('Should be able to render the title and paragraphs ', async () => {
        expect(screen.getByTestId("professional-title")).toBeInTheDocument()
        expect(screen.getByTestId("professional-paragraph")).toBeInTheDocument()
    })
    it('Should be able to render the img ', async () => {
      
        expect(screen.getByTestId("img-professional")).toBeInTheDocument()    
    })
})