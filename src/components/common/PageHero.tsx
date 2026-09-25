import { Container } from './Container';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  body: string;
}

export function PageHero({ eyebrow, title, body }: PageHeroProps) {
  return (
    <header className="page-hero">
      <Container>
        <div className="page-hero__inner">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
      </Container>
    </header>
  );
}
