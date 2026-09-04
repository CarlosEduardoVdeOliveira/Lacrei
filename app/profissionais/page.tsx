import styled from "styled-components";
import { ProfessionalSearch } from "../../components/ProfessionalSearch";
import { tokens } from "../../styles/tokens";

const Main = styled.main`
  max-width: 1180px;
  margin: 0 auto;
  padding: 3rem 1rem;

  @media (min-width: 768px) {
    padding: 5rem 1.5rem;
  }
`;

const Header = styled.header`
  margin-bottom: 2rem;

  h1 {
    margin: 0 0 .75rem;
    font-size: clamp(2rem, 5vw, 3.5rem);
    letter-spacing: -.035em;
    line-height: 1.08;
  }

  p {
    max-width: 700px;
    color: ${tokens.colors.textMuted};
    font-size: 1.05rem;
  }
`;

export default function ProfessionalsPage() {
  return (
    <Main id="main-content">
      <Header>
        <h1>Encontre profissionais de saúde</h1>
        <p>
          Pesquise por nome, especialidade ou cidade. Os dados abaixo são um
          mock local criado exclusivamente para demonstrar a integração da interface.
        </p>
      </Header>
      <ProfessionalSearch />
    </Main>
  );
}
