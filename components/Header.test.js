import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";

describe("Header Component", () => {
  test("it renders", () => {
    const { container } = render(<Header />);
    expect(container).toBeDefined();
  });

  test("it switch theme mode", () => {
    const { queryByTestId } = render(<Header />);
    const btn = queryByTestId('switch');
    expect(btn).toBeTruthy();
    expect(btn).toHaveAttribute('title', 'switch to dark mode');
    fireEvent.click(btn)
    expect(btn).toHaveAttribute('title', 'switch to light mode');
  });
});
