import React from "react";
import { render, waitFor, screen, act } from "@testing-library/react";
import { CardItem } from "./CardItem.component";
import axios from "axios";
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

// Mocking axios
jest.mock("axios");

describe("Card item test", () => {
  it("renders loading state initially", async () => {
    const mockAxios = axios as jest.Mocked<typeof axios>;
    mockAxios.get.mockResolvedValueOnce({ data: {} });
    act(() => {
      render(
        <BrowserRouter>
          <CardItem />
        </BrowserRouter>
      );
    });

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  // it("renders product not found if no product is found", async () => {
  //   const mockAxios = axios as jest.Mocked<typeof axios>;
  //   mockAxios.get.mockResolvedValueOnce({ data: { mockData } });
  //   act(() => {
  //     render(
  //       <BrowserRouter>
  //         <CardItem />
  //       </BrowserRouter>
  //     );
  //   });

  //   await waitFor(() =>
  //     expect(screen.getByText("Product not found.")).toBeInTheDocument()
  //   );
  // });
});
