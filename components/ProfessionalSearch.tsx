"use client";

import { useMemo, useState } from "react";
import styled from "styled-components";
import data from "../data/profissionais.json";
import { tokens } from "../styles/tokens";
import { ProfessionalCard } from "./ProfessionalCard";
import { Button } from "./Button";

type Professional = (typeof data)[number];

const SearchBox = styled.form`
  background: ${tokens.colors.surface};
  border: 1px solid ${tokens.colors.border};
  border-radius: ${tokens.radius.lg};
  padding: 1rem;
  box-shadow: ${tokens.shadow.sm};
  display: grid;
  gap: 1rem;

  @media (min-width: 700px) {
    grid-template-columns: 1.4fr 1fr auto;
    align-items: end;
    padding: 1.25rem;
  }
`;

const Field = styled.label`
  display: grid;
  gap: .4rem;
  font-weight: 700;

  input, select {
    min-height: 48px;
    border: 1px solid ${tokens.colors.border};
    border-radius: ${tokens.radius.sm};
    padding: 0 .8rem;
    color: ${tokens.colors.text};
    background: ${tokens.colors.surface};
  }
`;

const Results = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Empty = styled.div`
  padding: 2rem 1rem;
  background: ${tokens.colors.surfaceAlt};
  border-radius: ${tokens.radius.md};
  text-align: center;
`;

export function ProfessionalSearch() {
  const [term, setTerm] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [submitted, setSubmitted] = useState({ term: "", specialty: "" });

  const specialties = useMemo(
    () => [...new Set(data.map((professional) => professional.specialty))],
    []
  );

  const results = useMemo(() => {
    const normalized = submitted.term.trim().toLowerCase();

    return data.filter((professional) => {
      const matchesTerm =
        !normalized ||
        professional.name.toLowerCase().includes(normalized) ||
        professional.city.toLowerCase().includes(normalized) ||
        professional.specialty.toLowerCase().includes(normalized);

      const matchesSpecialty =
        !submitted.specialty || professional.specialty === submitted.specialty;

      return matchesTerm && matchesSpecialty;
    });
  }, [submitted]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted({ term, specialty });
  }

  function clearFilters() {
    setTerm("");
    setSpecialty("");
    setSubmitted({ term: "", specialty: "" });
  }

  return (
    <>
      <SearchBox onSubmit={handleSubmit} role="search" aria-label="Buscar profissionais">
        <Field>
          <span>Nome, especialidade ou cidade</span>
          <input
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            placeholder="Ex.: Psicologia"
          />
        </Field>

        <Field>
          <span>Especialidade</span>
          <select value={specialty} onChange={(event) => setSpecialty(event.target.value)}>
            <option value="">Todas</option>
            {specialties.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </Field>

        <div>
          <Button type="submit">Buscar</Button>
        </div>
      </SearchBox>

      <div aria-live="polite" aria-atomic="true" style={{ marginTop: "1rem" }}>
        {results.length} {results.length === 1 ? "profissional encontrado" : "profissionais encontrados"}.
      </div>

      <Results>
        {results.map((professional: Professional) => (
          <ProfessionalCard key={professional.id} professional={professional} />
        ))}
      </Results>

      {results.length === 0 && (
        <Empty>
          <p>Nenhum profissional encontrado com esses filtros.</p>
          <Button variant="secondary" onClick={clearFilters}>Limpar filtros</Button>
        </Empty>
      )}

      {results.length > 0 && (term || specialty) && (
        <div style={{ marginTop: "1rem" }}>
          <Button variant="secondary" onClick={clearFilters}>Limpar filtros</Button>
        </div>
      )}
    </>
  );
}
