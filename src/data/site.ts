export const siteConfig = {
  name: 'MORVIX',
  email: 'morvexengineering@gmail.com',
  social: {
    linkedin: '',
    facebook: '',
    instagram: '',
    x: '',
    github: '',
    youtube: '',
  },
} as const;

/**
 * Builds a Gmail web-compose URL (opens gmail.com directly instead of the
 * system's default mail client) with the recipient, subject, and body
 * pre-filled where provided.
 */
export function gmailComposeUrl(to: string, subject?: string, body?: string): string {
  const params = new URLSearchParams({ view: 'cm', fs: '1', to });
  if (subject) params.set('su', subject);
  if (body) params.set('body', body);
  return `https://mail.google.com/mail/?${params.toString()}`;
}
