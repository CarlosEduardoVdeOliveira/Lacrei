import styled from "styled-components";
import { Button } from "../components/Button";
import { tokens } from "../styles/tokens";

const Main = styled.main``;

const Hero = styled.section`
  background: ${tokens.colors.brandSoft};
  padding: 4rem 1rem;

  @media (min-width: 768px) {
    padding: 6rem 1.5rem;
  }
`;

const HeroInner = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  align-items: center;

  @media (min-width: 850px) {
    grid-template-columns: 1.15fr .85fr;
  }
`;

const Eyebrow = styled.p`
  color: ${tokens.colors.brandDark};
  font-weight: 800;
  margin: 0 0 .75rem;
`;

const Title = styled.h1`
  max-width: 760px;
  font-size: clamp(2.3rem, 7vw, 4.6rem);
  line-height: 1.05;
  letter-spacing: -0.045em;
  margin: 0 0 1.25rem;
`;

const Lead = styled.p`
  max-width: 650px;
  font-size: 1.15rem;
  color: ${tokens.colors.textMuted};
  margin: 0 0 1.75rem;
`;

const HeroCard = styled.div`
  min-height: 310px;
  border-radius: 36px;
  background: ${tokens.colors.surface};
  box-shadow: ${tokens.shadow.md};
  padding: 1.5rem;
  display: grid;
  place-items: center;
  text-align: center;
`;

const Heart = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 45% 55% 55% 45%;
  background: ${tokens.colors.accent};
  transform: rotate(-45deg);
  position: relative;

  &::after {
    content: "♡";
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    color: ${tokens.colors.text};
    font-size: 6rem;
    transform: rotate(45deg);
  }
`;

const Section = styled.section`
  max-width: 1180px;
  margin: 0 auto;
  padding: 4rem 1rem;

  @media (min-width: 768px) {
    padding: 5rem 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.7rem);
  margin: 0 0 .75rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 2rem;

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.article`
  background: ${tokens.colors.surface};
  border: 1px solid ${tokens.colors.border};
  border-radius: ${tokens.radius.lg};
  padding: 1.5rem;
`;

export default function HomePage() {
  return (
    <Main id="main-content">
      <Hero>
        <HeroInner>
          <div>
            <Eyebrow>SAÚDE PARA TODAS AS PESSOAS</Eyebrow>
            <Title>Encontre cuidado com acolhimento e respeito.</Title>
            <Lead>
              Uma experiência simples para ajudar você a encontrar profissionais
              de saúde preparados para oferecer um atendimento seguro e inclusivo.
            </Lead>
            <Button href="/profissionais">Encontrar cuidado</Button>
          </div>
          <HeroCard aria-label="Ilustração abstrata de cuidado">
            <div>
              <Heart aria-hidden="true" />
              <p><strong>Cuidado começa com acolhimento.</strong></p>
            </div>
          </HeroCard>
        </HeroInner>
      </Hero>

      <Section aria-labelledby="benefits-title">
        <SectionTitle id="benefits-title">Uma jornada pensada para você</SectionTitle>
        <p>Informação clara, navegação simples e foco em acessibilidade.</p>

        <Grid>
          <Card>
            <h3>Mais segurança</h3>
            <p>Encontre informações objetivas para tomar decisões com mais tranquilidade.</p>
          </Card>
          <Card>
            <h3>Mais acolhimento</h3>
            <p>Uma linguagem respeitosa e uma experiência criada para reduzir barreiras.</p>
          </Card>
          <Card>
            <h3>Mais acessibilidade</h3>
            <p>Estrutura semântica, teclado, foco visível e suporte a tecnologias assistivas.</p>
          </Card>
        </Grid>
      </Section>

      <Section aria-labelledby="cta-title">
        <SectionTitle id="cta-title">Pronto para encontrar seu cuidado?</SectionTitle>
        <p>Use nossa busca demonstrativa e explore profissionais por especialidade ou cidade.</p>
        <Button href="/profissionais">Buscar profissionais</Button>
      </Section>
    </Main>
  );
}
