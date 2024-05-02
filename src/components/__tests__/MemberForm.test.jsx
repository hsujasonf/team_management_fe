/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "@jest/globals";
import MemberForm from "../MemberForm";

const mockSetFormData = jest.fn();
const mockHandleSubmit = jest.fn();
const mockHandleDelete = jest.fn();

const defaultProps = {
  type: "add",
  handleSubmit: mockHandleSubmit,
  setFormData: mockSetFormData,
  formData: {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    role: "regular",
  },
  handleDelete: mockHandleDelete,
};

// Helper function to render the component with props
const setup = (props = {}) =>
  render(<MemberForm {...defaultProps} {...props} />);

describe("MemberForm", () => {
  test('renders correctly with type "add"', () => {
    setup();
    expect(screen.getByText(/add a team member/i)).toBeInTheDocument();
    expect(screen.queryByText(/delete/i)).toBeNull(); // Delete button should not be present
  });

  test('renders correctly with type "edit"', () => {
    setup({ type: "edit" });
    expect(screen.getByText(/edit a team member/i)).toBeInTheDocument();
    expect(screen.getByText(/delete/i)).toBeInTheDocument(); // Delete button should be present
  });
});

test("updates input fields correctly", () => {
  setup();
  const firstNameInput = screen.getByPlaceholderText("First Name");
  fireEvent.change(firstNameInput, {
    target: { value: "Jason", name: "first_name" },
  });
  expect(mockSetFormData).toHaveBeenCalledWith(expect.any(Function));
});
