/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect } from "@jest/globals";
import MemberCard from "../MemberCard";

describe("MemberCard", () => {
  const mockHandleClickEdit = jest.fn();
  const member = {
    id: 1,
    first_name: "Jason",
    last_name: "Hsu",
    role: "admin",
    phone_number: "123-456-7890",
    email: "hsujasonf@gmail.com",
  };

  beforeEach(() => {
    render(
      <MemberCard member={member} handleClickEdit={mockHandleClickEdit} />
    );
  });

  it("should display the correct member information", () => {
    expect(screen.getByText("Jason Hsu (admin)")).toBeInTheDocument();
    expect(screen.getByText("123-456-7890")).toBeInTheDocument();
    expect(screen.getByText("hsujasonf@gmail.com")).toBeInTheDocument();
  });

  it("should handle click events", () => {
    const teamMemberDiv = screen.getByText("Jason Hsu (admin)").closest("div");
    fireEvent.click(teamMemberDiv);
    expect(mockHandleClickEdit).toHaveBeenCalledWith(
      expect.any(Object),
      member
    );
  });
});
