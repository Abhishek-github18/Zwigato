import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/RestaurantList_Mock_Data.json"
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
         return Promise.resolve(MOCK_DATA);
        }
    })
})

test("Should search restraunt on input burger", async () => {

    await act(async ()=> render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      ));

      const cardListBeforeSearch = screen.getAllByTestId("cards");

      expect(cardListBeforeSearch.length).toBe(20);

      const searchBox = screen.getByTestId("searchBox");

      fireEvent.change(searchBox, {target: {value : "burger"}})

      const searchBtn = screen.getByRole("button", {name:"Search"})

      fireEvent.click(searchBtn);

      const cardListAfterSeach = screen.getAllByTestId("cards");

      expect(cardListAfterSeach.length).toBe(2);
 
});
