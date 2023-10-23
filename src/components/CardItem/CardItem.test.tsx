import React from "react";
import { render, waitFor } from "@testing-library/react";
import { CardItem } from "./CardItem.component";
import axios from "axios";
import { useParams } from "react-router-dom";

jest.mock("axios");
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

const mockProduct = {
  ProductId: 123,
  Title: "Test Product",
  ProductImage: { Link: { Href: "test-image.jpg" } },
};

describe("<CardItem />", () => {
  it("renders loading state initially", () => {
    const { getByText } = render(<CardItem />);
    expect(getByText("Loading...")).toBeInTheDocument();
  });

  it("renders product details on successful fetch", async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({
      data: { Products: [mockProduct] },
    });
    (useParams as jest.Mock).mockReturnValue({ productId: "123" });

    const { getByText, getByAltText } = render(<CardItem />);
    await waitFor(() => expect(getByText("Test Product")).toBeInTheDocument());
    expect(getByAltText("Test Product")).toHaveAttribute(
      "src",
      "test-image.jpg"
    );
  });

  it("renders not found message when product is not in list", async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({
      data: { Products: [] },
    });
    (useParams as jest.Mock).mockReturnValue({ productId: "123" });

    const { getByText } = render(<CardItem />);
    await waitFor(() =>
      expect(getByText("Product not found.")).toBeInTheDocument()
    );
  });

  it("renders not found message on fetch error", async () => {
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error("Fetch error"));
    (useParams as jest.Mock).mockReturnValue({ productId: "123" });

    const { getByText } = render(<CardItem />);
    await waitFor(() =>
      expect(getByText("Product not found.")).toBeInTheDocument()
    );
  });
});
