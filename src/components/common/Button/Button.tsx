import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import styles from './Button.module.css';

interface BaseProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  arrow?: boolean;
}

interface LinkButtonProps extends BaseProps {
  to: string;
  type?: never;
}

interface NativeButtonProps extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
  to?: never;
}

type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  const variant = props.variant ?? 'primary';
  const className = `${styles.button} ${styles[variant]} ${props.className ?? ''}`.trim();
  const content = <>{props.children}{props.arrow ? <ArrowUpRight size={17} aria-hidden="true" /> : null}</>;

  if ('to' in props && props.to) {
    return <Link to={props.to} className={className}>{content}</Link>;
  }

  const { children: _children, variant: _variant, arrow: _arrow, className: _className, ...buttonProps } = props as NativeButtonProps;
  return <button className={className} {...buttonProps}>{content}</button>;
}
