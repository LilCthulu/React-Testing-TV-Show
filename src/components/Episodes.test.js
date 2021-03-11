import React from "react";
import { queryByText, render, screen } from "@testing-library/react";
import Episodes from "./Episodes"

test("Episodes component renders properly", () => {
    render( < Episodes / > );
});

test("Component select a season button on first render", () => {
    // Arrange
    const { getByRole, queryByText } = render( < Episodes / > );
    const button = getByRole("button", { name: /Select a season/i }); // already an implicit assertion here that one and only one element in the (virtual) DOM contains this text

    // (no Act needed)


    // Assert
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Select a season");
});