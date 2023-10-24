import { CardList } from "./CardList.component";
import axios from "axios";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const mockData = {
  data: {
    Products: [
      {
        ProductId: "123",
        Title: "Test Card 1",
        Description: "Test Product Description",
        ProductImage: {
          Link: {
            Href: "https://test-image-1.com",
          },
        },
      },
    ],
  },
};

describe("CardList Component", () => {
  test("should renders component", () => {
    render(
      <BrowserRouter>
        <CardList />
      </BrowserRouter>
    );

    expect(screen.getByText("Cards")).toBeInTheDocument();
  });

  test("should render description text", async () => {
    jest.spyOn(axios, "get").mockResolvedValueOnce(mockData);

    render(
      <BrowserRouter>
        <CardList />
      </BrowserRouter>
    );

    await waitFor(() =>
      expect(screen.getByText("Test Product Description")).toBeInDocument()
    );
  });
});
