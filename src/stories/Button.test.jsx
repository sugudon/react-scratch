import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {

    test("renders Save button", () => {

        render(<Button label="Save" />);

        expect(
            screen.getByText("Save")
        ).toBeInTheDocument();

    });

    test("calls click handler", async () => {

        const user = userEvent.setup();

        const handleClick = jest.fn();

        render(<Button onClick={handleClick} />);

        await user.click(screen.getByRole("button"));

        expect(handleClick).toHaveBeenCalledTimes(1);

    });

});