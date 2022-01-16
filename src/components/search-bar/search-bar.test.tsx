import { describe, expect } from "@jest/globals";
import React from "react";
import { fireEvent, getByTestId, render } from "@testing-library/react";
import SearchBar from "./search-bar";

const mockFn = jest.fn();

describe("SearchBar", () => {
  it("value is correct",  () => {
    const { getByTestId } = render(<SearchBar value="test" handleChange={console.log} />);

    expect(getByTestId("search-bar").getAttribute("value")).toEqual("test")
  });

  it("handleChange is triggered",  () => {
    const { getByTestId } = render(<SearchBar value="" handleChange={mockFn} />);

    fireEvent.change(getByTestId("search-bar"), {target: {value: 'new value'}})

    expect(mockFn).toHaveBeenCalled();
  });
});