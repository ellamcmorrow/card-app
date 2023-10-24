import { CardList } from "./CardList.component";
import axios from "axios";
import { act, render, screen } from "@testing-library/react";
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
    jest.restoreAllMocks();
  });
});
