import React, { FC } from "react";
import { Button } from "./";
import { render, screen, cleanup } from "@testing-library/react";

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
  test("it renders with width without fullWidth prop", () => {
    const buttonText = "click me";
    render(<Button onPress={clickHandler}>{buttonText}</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveStyle("width: 50%");
  });

  test("it renders with fullWidth prop", () => {
    const buttonText = "click me";
    render(<Button onPress={clickHandler} fullWidth={true}>{buttonText}</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveStyle("width: 100%");
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
