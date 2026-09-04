"use client";
import Link from "next/link";
import styled from "styled-components";
import { tokens } from "../styles/tokens";
import { BrandMark } from "./BrandMark";

const FooterShell = styled.footer`
  background: ${tokens.colors.text};
  color: ${tokens.colors.white};
  margin-top: 4rem;
`;

const Inner = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 3rem 1rem 1.5rem;
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    padding: 4rem 1.5rem 1.5rem;
    grid-template-columns: 1.4fr 1fr 1fr;
  }
`;

const Brand = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;

  svg {
    flex: 0 0 auto;
  }
`;

const Column = styled.div`
  display: grid;
  align-content: start;
  gap: 0.5rem;

  h2 {
    font-size: 1rem;
    margin: 0 0 0.25rem;
  }

  a {
    color: #E8F1EF;
    text-decoration: none;
  }

  a:hover { text-decoration: underline; }
`;

const Bottom = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 1rem;
  border-top: 1px solid rgba(255,255,255,.18);
  color: #D8E5E2;
  font-size: .875rem;

  @media (min-width: 768px) { padding: 1rem 1.5rem; }
`;

export function Footer() {
  return (
    <FooterShell>
      <Inner>
        <Brand>
          <BrandMark />
          <div>
            <strong>Lacrei Saúde</strong>
            <p>Saúde com acolhimento, respeito e segurança.</p>
          </div>
        </Brand>

        <Column>
          <h2>Explorar</h2>
          <Link href="/">Início</Link>
          <Link href="/profissionais">Buscar profissionais</Link>
        </Column>

        <Column>
          <h2>Compromisso</h2>
          <span>Acessibilidade</span>
          <span>Privacidade</span>
          <span>Inclusão</span>
        </Column>
      </Inner>
      <Bottom>Projeto demonstrativo desenvolvido para o desafio técnico Front-end.</Bottom>
    </FooterShell>
  );
}
