import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Label from "./Label";

const fakeData = {
  testId: 'testId',
  label: "testLabel",
  value: "testValue",
};

const fakeData01 = {
  testId: 'testId',
  label: "testLabel",
  value: "0",
};

const fakeData02 = {
  testId: 'testId',
  label: "testLabel",
};

describe("Label Component", () => {
  test("it renders", () => {
    render(<Label {...fakeData} />);
  });

  test("it not renders w/ value === '0'", () => {
    const { queryByTestId } = render(<Label {...fakeData01} />);
    expect(queryByTestId(fakeData.testId)).toBeNull();
  });

  test("it not renders w/ value null", () => {
    const { queryByTestId } = render(<Label {...fakeData02} />);
    expect(queryByTestId(fakeData.testId)).toBeNull();
  });

  test("it contains correct label and value", () => {
    const { queryByTestId } = render(<Label {...fakeData} />);
    expect(queryByTestId(fakeData.testId)).toHaveTextContent(fakeData.label);
    expect(queryByTestId(fakeData.testId)).toHaveTextContent(fakeData.value);
  });
});
