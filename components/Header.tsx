"use client";

import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { tokens } from "../styles/tokens";
import { BrandMark } from "./BrandMark";
import { Button } from "./Button";

const HeaderShell = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(250, 252, 251, 0.96);
  border-bottom: 1px solid ${tokens.colors.border};
  backdrop-filter: blur(10px);
`;

const Inner = styled.div`
  max-width: 1180px;
  min-height: 76px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (min-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  text-decoration: none;
  font-weight: 800;
`;

const BrandText = styled.span`
  display: grid;
  line-height: 1.1;
`;

const MenuButton = styled.button`
  width: 48px;
  height: 48px;
  border: 1px solid ${tokens.colors.border};
  border-radius: ${tokens.radius.sm};
  background: ${tokens.colors.surface};
  font-size: 1.25rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Nav = styled.nav<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? "grid" : "none")};
  position: absolute;
  left: 0;
  right: 0;
  top: 76px;
  padding: 1rem;
  background: ${tokens.colors.surface};
  border-bottom: 1px solid ${tokens.colors.border};
  gap: 0.5rem;

  a {
    padding: 0.8rem;
    border-radius: ${tokens.radius.sm};
    text-decoration: none;
    font-weight: 650;
  }

  a:hover {
    background: ${tokens.colors.surfaceAlt};
  }

  @media (min-width: 768px) {
    position: static;
    display: flex;
    align-items: center;
    padding: 0;
    border: 0;
    background: transparent;
  }
`;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <HeaderShell>
      <Inner>
        <Brand href="/" aria-label="Lacrei Saúde — página inicial">
          <BrandMark />
          <BrandText>
            <span>Lacrei</span>
            <span>Saúde</span>
          </BrandText>
        </Brand>

        <MenuButton
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "×" : "☰"}
        </MenuButton>

        <Nav id="main-navigation" aria-label="Navegação principal" $open={open}>
          <Link href="/" onClick={() => setOpen(false)}>Início</Link>
          <Link href="/profissionais" onClick={() => setOpen(false)}>Profissionais</Link>
          <Button href="/profissionais" variant="secondary">Encontrar cuidado</Button>
        </Nav>
      </Inner>
    </HeaderShell>
  );
}
