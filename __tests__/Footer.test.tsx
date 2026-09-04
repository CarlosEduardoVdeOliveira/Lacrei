import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/Footer";

describe("Footer", () => {
  it("renderiza links e compromissos", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Buscar profissionais" })).toBeInTheDocument();
    expect(screen.getByText("Acessibilidade")).toBeInTheDocument();
  });
});
