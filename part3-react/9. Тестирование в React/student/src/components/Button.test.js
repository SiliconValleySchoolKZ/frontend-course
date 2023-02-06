import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Button component", () => {
  test("clicking the button calls event handler once", async () => {
    const mockHandler = jest.fn();
    render(<Button onClick={mockHandler} />);
    const button = screen.getByText("FIRE");
    const user = userEvent.setup();
    await user.click(button);

    expect(mockHandler.mock.calls).toHaveLength(1);
  });
});
