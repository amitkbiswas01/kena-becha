import { render, screen } from "@testing-library/react";

import App from "app";

test("renders Hello World", () => {
    render(<App />);
    const linkElement = screen.getByText(/Hello World/i);
    expect(linkElement).toBeInTheDocument();
});
