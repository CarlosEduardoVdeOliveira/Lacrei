import type { Metadata } from "next";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { GlobalStyle } from "../styles/GlobalStyle";
import StyledComponentsRegistry from "../styles/StyledComponentsRegistry";

export const metadata: Metadata = {
  title: "Lacrei Saúde | Cuidado com acolhimento",
  description:
    "Encontre profissionais de saúde em uma experiência acolhedora, acessível e segura.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />

          <a href="#main-content" className="skip-link">
            Ir para o conteúdo
          </a>

          <Header />

          {children}

          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
