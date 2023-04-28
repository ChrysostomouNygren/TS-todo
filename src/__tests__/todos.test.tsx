import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import App from "../App";
import userEvent from "@testing-library/user-event";
import { test, expect, describe } from "vitest";

describe("testa test", () => {
  test("add a todo item", async () => {
    render(<App />);
    const element = await screen.findByPlaceholderText("todelido");
    await userEvent.type(element, "test grej");

    expect(screen.findAllByPlaceholderText("todelido")).toBe("test grej");
  });
});
