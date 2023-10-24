import React from "react";
import { screen, cleanup, render } from "@testing-library/react";
import { Card } from "./Card.component";
import renderer from "react-test-renderer";

describe("card test", () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it("matches the snapshot", () => {
    const tree = renderer
      .create(
        <Card>
          <Card.Heading>Test Heading</Card.Heading>
          <Card.Body>Test Body</Card.Body>
          <Card.Image src="https://example.com/test.jpg" alt="Test Image" />
          <Card.Footer>Test Footer</Card.Footer>
        </Card>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
