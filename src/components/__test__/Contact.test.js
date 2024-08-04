import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

test("Should render Contact component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();

})

test("Should render button Component in Contact", ()=>{
    render(<Contact />);

    const button = screen.getByRole("button");

    // Assertion

    expect(button).toBeInTheDocument();
})

test("Should render placeholder text in Contact", ()=>{
    render(<Contact />);

    const placeholderText = screen.getByPlaceholderText("name");

    // Assertion

    expect(placeholderText).toBeInTheDocument();
})