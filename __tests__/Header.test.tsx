import { render, screen } from "@testing-library/react";
import { Header } from "@/components/Header";

describe("Header", () => {
  it("renderiza a navegação principal", () => {
    render(<Header />);
    expect(screen.getByRole("navigation", { name: "Navegação principal" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /página inicial/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Profissionais" })).toBeInTheDocument();
  });
});
