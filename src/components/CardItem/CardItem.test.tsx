import React from "react";
import axios from "axios";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { CardItem } from "./CardItem.component";

const mockData = {
  data: {
    Products: [
      {
        ProductId: "123",
        Title: "Test Card 1",
        ProductImage: {
          Link: {
            Href: "https://test-image-1.com",
          },
        },
      },
      {
        ProductId: "456",
        Title: "Test Card 2",
        ProductImage: {
          Link: {
            Href: "https://test-image-2.com",
          },
        },
      },
    ],
  },
};
// Mocking the axios module
jest.mock("axios");

describe("CardItem Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("displays a loading message when fetching product", () => {
    jest.spyOn(axios, "get").mockResolvedValueOnce(mockData);

    render(
      <MemoryRouter initialEntries={["/product/123"]}>
        <Routes>
          <Route path="/product/:productId">
            <CardItem />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("displays the product information when fetched successfully", async () => {
    jest.spyOn(axios, "get").mockResolvedValueOnce(mockData);

    render(
      <>
        <CardItem />
      </>
    );

    expect(await screen.getByText("Test Card")).toBeInTheDocument();
    expect(await screen.getByAltText("Test Card")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Buy me!" })).toBeInTheDocument();
  });
});
