import React, { FC } from "react";
import { Button } from "./";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import "jest-styled-components";

const clickHandler = jest.fn();

describe("button test", () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  test("it renders", () => {
    const buttonText = "click me";
    render(<Button onPress={clickHandler}>{buttonText}</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent(buttonText);
  });

  test("disabled prop disables button correctly", () => {
    render(
      <Button onPress={clickHandler} disabled>
        Click me
      </Button>
    );
    fireEvent.click(screen.getByRole("button"));
    expect(clickHandler).not.toHaveBeenCalled();
  });

  test("native button attributes are propagated correctly", () => {
    render(
      <Button onPress={clickHandler} type="submit">
        Click me
      </Button>
    );
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });
});
