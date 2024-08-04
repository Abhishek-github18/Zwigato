import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/RestrauntCard_Mock_Data.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("should load RestaurantCard component", () => {
  render(
    <BrowserRouter>
      <RestaurantCard resData={MOCK_DATA} />
    </BrowserRouter>
  );
  const restaurantName = screen.getByText("Barbeque Nation");
  expect(restaurantName).toBeInTheDocument();
});


test("Should load promoted label restaurant card component", ()=> {
    const DiscountedRestaurant = withPromotedLabel(RestaurantCard);

    render(
        <BrowserRouter>
        <DiscountedRestaurant resData={MOCK_DATA}/>
        </BrowserRouter>
    )

    const discountedLabel = screen.getByText("40% OFF");

    expect(discountedLabel).toBeInTheDocument();
})
