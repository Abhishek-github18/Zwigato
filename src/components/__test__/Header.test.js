import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should render Header Component", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>    
  );
});

test("Should render Login Button in Header Component", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button");

    expect(loginButton).toBeInTheDocument();
})

test("Should render Login Button in Header Component", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button");

    expect(loginButton).toBeInTheDocument();
})

test("Should render Login Button in Header Component", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name:"Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name:"Logout"});

    expect(logoutButton).toBeInTheDocument();
})

test("Should render Cart link in Header Component", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )

    const cartLink = screen.getByRole("link", {name:"Cart - (0 items)"});

    expect(cartLink).toBeInTheDocument();
})

test("Should render Cart link in Header Component", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )

    const cartLink = screen.getByRole("link", {name:"Cart - (0 items)"});

    expect(cartLink).toBeInTheDocument();
})