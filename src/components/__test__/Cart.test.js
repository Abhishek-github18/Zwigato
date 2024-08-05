import { fireEvent, render, screen } from "@testing-library/react";
import Menu from "../Menu";
import MOCK_DATA from "../mocks/RestuarantMenu_Data.json";
import { act } from "react";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("Should render Restaurant Menu Component", async () => {
  await act(() =>
    render(
        <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
        <Menu />
        <Cart/>
      </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Desserts");

//   console.log(accordianHeader);

  expect(accordianHeader).toBeInTheDocument();

  fireEvent.click(accordianHeader);

  const doubleKaMeethaText = screen.getByText("Double Ka Meetha");

  expect(doubleKaMeethaText).toBeInTheDocument();

  const accordianItems = screen.getAllByTestId('accordianItems');

  expect(accordianItems.length).toBe(4);

//   console.log("Before clicking the add to cart button");
//   accordianItems.forEach(card => console.log(card.outerHTML));

  const addToCartBtn = screen.getAllByRole("button", {name: "Add+"});

  fireEvent.click(addToCartBtn[0]);

  const cartCount = screen.getByText("Cart - (1 items)")

  expect(cartCount).toBeInTheDocument();

  const accrodianItemsAfterClick = screen.getAllByTestId("accordianItems");

//   console.log("after clicking the add to cart button");
//   accrodianItemsAfterClick.forEach(card => console.log(card.outerHTML));

  expect(accrodianItemsAfterClick.length).toBe(1);

  const clearCartBtn = screen.getByRole("button", {name:'Clear Cart'})

  fireEvent.click(clearCartBtn);

  const accrodianItemsAfterClearCart = screen.queryAllByTestId('accordianItems');

  expect(accrodianItemsAfterClearCart.length).toBe(0);

});
