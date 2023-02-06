import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("it renders", () => {
    render(<App />);
    const element = screen.getByText("Users:");
    // eslint-disable-next-line
    // screen.debug(element);
    expect(element).toBeInTheDocument();
  });

  test("it displays list of users", async () => {
    render(<App />);

    const element = await screen.findByTestId("user-list");
    expect(element).toBeInTheDocument();
  });
});
