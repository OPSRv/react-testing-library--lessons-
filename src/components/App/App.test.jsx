import { render, screen } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Hello/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("App component", () => {
  it("App renders", () => {
    render(<App />);

    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
