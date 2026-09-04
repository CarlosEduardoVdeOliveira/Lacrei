"use client";

import { createGlobalStyle } from "styled-components";
import { tokens } from "./tokens";

export const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: light;
    font-family: ${tokens.typography.fontFamily};
  }

  * { box-sizing: border-box; }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background: ${tokens.colors.background};
    color: ${tokens.colors.text};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  a { color: inherit; }

  button, input, select {
    font: inherit;
  }

  :focus-visible {
    outline: 3px solid ${tokens.colors.focus};
    outline-offset: 3px;
  }

  ::selection {
    background: ${tokens.colors.brandSoft};
    color: ${tokens.colors.text};
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
    }
  }
  .skip-link {
  position: fixed;
  left: 8px;
  top: 8px;
  z-index: 100;

  transform: translateY(-150%);

  background: #ffffff;
  color: #12312b;

  padding: 8px 12px;
  border-radius: 8px;

  text-decoration: none;
  font-weight: 700;
}

.skip-link:focus {
  transform: translateY(0);
  outline: 3px solid #018762;
  outline-offset: 2px;
}
`;
