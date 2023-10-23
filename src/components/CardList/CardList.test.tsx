import { CardList } from "./CardList.component";
import axios from "axios";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { BrowserRouter } from "react-router-dom";

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

describe("CardList Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  test("should render alt text", async () => {
    jest.spyOn(axios, "get").mockResolvedValueOnce(mockData);

    render(
      <BrowserRouter>
        <CardList />
      </BrowserRouter>
    );

    expect(await screen.findByAltText("Test Card 1")).toBeInTheDocument();
    expect(screen.getByAltText("Test Card 2")).toBeInTheDocument();
  });
});
