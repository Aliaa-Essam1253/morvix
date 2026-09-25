import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  wide?: boolean;
  className?: string;
}

export function Container({ children, wide = false, className = '' }: ContainerProps) {
  return <div className={`${wide ? 'container-wide' : 'container'} ${className}`.trim()}>{children}</div>;
}
