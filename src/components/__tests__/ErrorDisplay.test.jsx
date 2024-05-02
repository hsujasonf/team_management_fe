/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ErrorDisplay from "../ErrorDisplay";
import { describe, expect } from "@jest/globals";

describe("ErrorDisplay", () => {
  const mockClearError = jest.fn();
  const errorMessage = "An error has occurred!";

  beforeEach(() => {
    render(<ErrorDisplay message={errorMessage} clearError={mockClearError} />);
  });

  it("should display the error message", () => {
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it("should call clearError when close button is clicked", () => {
    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);
    expect(mockClearError).toHaveBeenCalledTimes(1);
  });
});
