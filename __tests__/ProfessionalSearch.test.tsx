import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProfessionalSearch } from "@/components/ProfessionalSearch";

describe("ProfessionalSearch", () => {
  it("filtra profissionais por termo após buscar", async () => {
    const user = userEvent.setup();
    render(<ProfessionalSearch />);

    const input = screen.getByPlaceholderText("Ex.: Psicologia");
    await user.type(input, "Psicologia");
    await user.click(screen.getByRole("button", { name: "Buscar" }));

    expect(screen.getByText(/1 profissional encontrado/i)).toBeInTheDocument();
    expect(screen.getByText("Dra. Ana Martins")).toBeInTheDocument();
    expect(screen.queryByText("Dr. Rafael Souza")).not.toBeInTheDocument();
  });

  it("limpa os filtros", async () => {
    const user = userEvent.setup();
    render(<ProfessionalSearch />);

    await user.type(screen.getByPlaceholderText("Ex.: Psicologia"), "não existe");
    await user.click(screen.getByRole("button", { name: "Buscar" }));

    expect(screen.getByRole("button", { name: "Limpar filtros" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Limpar filtros" }));

    expect(screen.getByText(/4 profissionais encontrados/i)).toBeInTheDocument();
  });
});
