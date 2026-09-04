import styled from "styled-components";
import { tokens } from "../styles/tokens";

type Professional = {
  id: number;
  name: string;
  specialty: string;
  city: string;
  state: string;
  description: string;
  accessible: boolean;
};

const Card = styled.article`
  background: ${tokens.colors.surface};
  border: 1px solid ${tokens.colors.border};
  border-radius: ${tokens.radius.lg};
  padding: 1.25rem;
  box-shadow: ${tokens.shadow.sm};
  display: grid;
  gap: 0.8rem;
`;

const Avatar = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: ${tokens.colors.brandSoft};
  color: ${tokens.colors.brandDark};
  display: grid;
  place-items: center;
  font-weight: 800;
`;

const Top = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  h2 {
    font-size: 1.1rem;
    margin: 0;
  }

  p { margin: .15rem 0 0; color: ${tokens.colors.textMuted}; }
`;

const Badge = styled.span`
  justify-self: start;
  padding: .35rem .7rem;
  border-radius: ${tokens.radius.pill};
  background: ${tokens.colors.brandSoft};
  color: ${tokens.colors.brandDark};
  font-size: .82rem;
  font-weight: 750;
`;

export function ProfessionalCard({ professional }: { professional: Professional }) {
  const initials = professional.name
    .replace(/^(Dra?\.|Dr\.)\s*/i, "")
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  return (
    <Card>
      <Top>
        <Avatar aria-hidden="true">{initials}</Avatar>
        <div>
          <h2>{professional.name}</h2>
          <p>{professional.specialty}</p>
        </div>
      </Top>
      <p>{professional.description}</p>
      <p><strong>Localização:</strong> {professional.city} — {professional.state}</p>
      {professional.accessible && <Badge>Atendimento acessível</Badge>}
    </Card>
  );
}
