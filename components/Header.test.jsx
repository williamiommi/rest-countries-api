import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header Component", () => {
  test("it renders", () => {
    const { container } = render(<Header />);
    expect(container).toBeDefined();
  });
});
