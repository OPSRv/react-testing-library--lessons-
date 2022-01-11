import { render, screen } from "@testing-library/react";

import Search from "./Search";

const onChange = jest.fn();

describe("Search component", () => {
  it("renders Search component", () => {
    render(
      <Search value="" onChange={onChange}>
        Find:
      </Search>
    );
    expect(screen.getByText(/find/i)).toBeInTheDocument();
  });
});
