import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

it("render Button without crash", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button></Button>, div);
});

it("render button correctly", () => {
  const { getByTestId } = render(<Button name="click me next" />);
  expect(getByTestId("testButtonId")).toHaveTextContent("click me next");
});
