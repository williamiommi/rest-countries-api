import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import Button from "./Button";

const fakeData = {
  linkName: "Link Name",
  linkUrl: "/",
};

describe("Button Component", () => {
  afterEach(cleanup);

  test("it renders correctly", () => {
    render(<Button {...fakeData} />);
  });

  test("it renders correctly href attribute", () => {
    const { queryByTestId } = render(<Button {...fakeData} />);
    expect(queryByTestId("button")).toHaveAttribute("href", fakeData.linkUrl);
  });

  test("it renders correctly link name", () => {
    const { queryByTestId } = render(<Button {...fakeData} />);
    expect(queryByTestId("button")).toHaveTextContent(fakeData.linkName);
  });

  test("it not renders icon component", () => {
    const { queryByTestId } = render(<Button {...fakeData} />);
    expect(queryByTestId("icon")).toBeFalsy();
  });

  test("it renders correctly icon component", () => {
    const { queryByTestId } = render(
      <Button {...fakeData} icon={<ArrowLeftIcon data-testid="icon" />} />
    );
    expect(queryByTestId("icon")).toBeTruthy();
  });

  test("it renders correctly anchorClass attribute", () => {
    const testClass = "test-class";
    const { queryByTestId } = render(
      <Button {...fakeData} anchorClass={testClass} />
    );
    expect(queryByTestId("button")).toHaveClass(testClass);
  });
});
