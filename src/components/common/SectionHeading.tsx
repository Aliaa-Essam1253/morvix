interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  body?: string;
  align?: 'start' | 'center';
}

export function SectionHeading({ eyebrow, title, body, align = 'start' }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${align === 'center' ? 'section-heading--center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}
