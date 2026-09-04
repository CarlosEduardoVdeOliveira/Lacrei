"use client";

import Link from "next/link";
import styled, { css } from "styled-components";

import { tokens } from "../styles/tokens";

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

const base = css`
  min-height: 48px;
  padding: 0.75rem 1.25rem;
  border-radius: ${tokens.radius.pill};
  border: 2px solid transparent;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-weight: 750;
  text-decoration: none;
  cursor: pointer;

  transition:
    transform 160ms ease,
    background 160ms ease,
    box-shadow 160ms ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: ${tokens.shadow.sm};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }

  &:focus-visible {
    outline: 3px solid ${tokens.colors.brand};
    outline-offset: 3px;
  }
`;

const StyledButton = styled.button<{ $variant: Props["variant"] }>`
  ${base}

  background: ${({ $variant }) =>
    $variant === "secondary"
      ? tokens.colors.surface
      : tokens.colors.brand};

  color: ${({ $variant }) =>
    $variant === "secondary"
      ? tokens.colors.brandDark
      : tokens.colors.white};

  border-color: ${tokens.colors.brand};
`;

const StyledAnchor = styled.a<{ $variant: Props["variant"] }>`
  ${base}

  background: ${({ $variant }) =>
    $variant === "secondary"
      ? tokens.colors.surface
      : tokens.colors.brand};

  color: ${({ $variant }) =>
    $variant === "secondary"
      ? tokens.colors.brandDark
      : tokens.colors.white};

  border-color: ${tokens.colors.brand};
`;

export function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  onClick,
  disabled,
}: Props) {
  if (href) {
    return (
      <StyledAnchor
        href={href}
        $variant={variant}
      >
        {children}
      </StyledAnchor>
    );
  }

  return (
    <StyledButton
      type={type}
      $variant={variant}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
}