import { render, fireEvent } from "@testing-library/react";
import SearchInput from "./SearchInput";

describe("SearchInput Component", () => {
  test("it renders", () => {
    const { container } = render(<SearchInput />);
    expect(container).toBeDefined();
  });

  test("input value contains searched text", () => {
    const { getByTestId } = render(<SearchInput />);
    const searchedTerm = 'Usa';
    const input = getByTestId('input');
    fireEvent.change(input, { target: { value: searchedTerm } })
    expect(input.value).toBe(searchedTerm)
  });
});
