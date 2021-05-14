import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import Button from "./Button";

const fakeData01 = {
  linkName: "Link Name",
  linkUrl: "/",
};

describe("Button Component", () => {
  afterEach(cleanup);

  test("it renders correctly", () => {
    render(<Button {...fakeData01} />);
  });

  test("it renders correctly href attribute", () => {
    const { queryByTestId } = render(<Button {...fakeData01} />);
    expect(queryByTestId("button")).toHaveAttribute("href", fakeData01.linkUrl);
  });

  test("it renders correctly link name", () => {
    const { queryByTestId } = render(<Button {...fakeData01} />);
    expect(queryByTestId("button")).toHaveTextContent(fakeData01.linkName);
  });

  test("it not renders icon component", () => {
    const { queryByTestId } = render(
      <Button {...fakeData01} />
    );
    expect(queryByTestId("icon")).toBeFalsy();
  });

  test("it renders correctly icon component", () => {
    const { queryByTestId } = render(
      <Button {...fakeData01} icon={<ArrowLeftIcon data-testid='icon' />} />
    );
    expect(queryByTestId("icon")).toBeTruthy();
  });

  test("it renders correctly anchorClass attribute", () => {
    const testClass = "test-class";
    const { queryByTestId } = render(
      <Button {...fakeData01} anchorClass={testClass} />
    );
    expect(queryByTestId("button")).toHaveClass(testClass);
  });
});
