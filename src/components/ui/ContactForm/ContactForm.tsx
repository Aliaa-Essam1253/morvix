import { useMemo, useState, type FormEvent, type ReactElement } from 'react';
import { Mail, Send } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { capabilities } from '../../../data/capabilities';
import { siteConfig, gmailComposeUrl } from '../../../data/site';
import { useTranslation } from '../../../i18n/LocalizationContext';
import styles from './ContactForm.module.css';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  description: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') ?? '';
  const [values, setValues] = useState<FormValues>({
    name: '', email: '', phone: '', company: '', service: initialService,
    budget: '', timeline: '', description: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [ready, setReady] = useState(false);

  const budgets = useMemo(() => [
    ['unknown', 'contact.budgetUnknown'], ['under-2500', 'contact.budgetSmall'],
    ['2500-10000', 'contact.budgetMedium'], ['10000-50000', 'contact.budgetLarge'],
    ['50000-plus', 'contact.budgetEnterprise'],
  ] as const, []);

  const timelines = useMemo(() => [
    ['flexible', 'contact.timelineFlexible'], ['month', 'contact.timelineMonth'],
    ['quarter', 'contact.timelineQuarter'], ['half', 'contact.timelineHalf'], ['long', 'contact.timelineLong'],
  ] as const, []);

  const update = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setReady(false);
  };

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = t('contact.required');
    if (!values.email.trim()) next.email = t('contact.required');
    else if (!emailPattern.test(values.email)) next.email = t('contact.invalidEmail');
    if (!values.service) next.service = t('contact.required');
    if (values.description.trim().length < 20) next.description = values.description.trim() ? t('contact.tooShort') : t('contact.required');
    return next;
  };

  const labelForCapability = (id: string) => {
    const item = capabilities.find((capability) => capability.id === id);
    return item ? t(item.titleKey) : id;
  };

  const labelForOption = (value: string, options: readonly (readonly [string, string])[]) => {
    const item = options.find(([id]) => id === value);
    return item ? t(item[1]) : value || '—';
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const body = [
      t('contact.mailIntro'),
      '',
      `${t('contact.name')}: ${values.name}`,
      `${t('contact.email')}: ${values.email}`,
      `${t('contact.phone')}: ${values.phone || '—'}`,
      `${t('contact.company')}: ${values.company || '—'}`,
      `${t('contact.service')}: ${labelForCapability(values.service)}`,
      `${t('contact.budget')}: ${labelForOption(values.budget, budgets)}`,
      `${t('contact.timeline')}: ${labelForOption(values.timeline, timelines)}`,
      '',
      `${t('contact.description')}:`,
      values.description,
    ].join('\n');

    // Opens Gmail's web compose window directly (instead of the system's default mail app)
    // with the recipient, subject, and project brief pre-filled.
    const href = gmailComposeUrl(siteConfig.email, t('contact.mailSubject'), body);
    setReady(true);
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.heading}>
        <div className={styles.icon}><Mail size={20} aria-hidden="true" /></div>
        <div>
          <h2>{t('contact.formTitle')}</h2>
          <p>{t('contact.formBody')}</p>
        </div>
      </div>

      <div className={styles.grid}>
        <Field label={t('contact.name')} error={errors.name} required>
          <input value={values.name} onChange={(e) => update('name', e.target.value)} autoComplete="name" aria-invalid={Boolean(errors.name)} />
        </Field>
        <Field label={t('contact.email')} error={errors.email} required>
          <input type="email" value={values.email} onChange={(e) => update('email', e.target.value)} autoComplete="email" aria-invalid={Boolean(errors.email)} />
        </Field>
        <Field label={t('contact.phone')}>
          <input type="tel" value={values.phone} onChange={(e) => update('phone', e.target.value)} autoComplete="tel" />
        </Field>
        <Field label={t('contact.company')}>
          <input value={values.company} onChange={(e) => update('company', e.target.value)} autoComplete="organization" />
        </Field>
        <Field label={t('contact.service')} error={errors.service} required>
          <select value={values.service} onChange={(e) => update('service', e.target.value)} aria-invalid={Boolean(errors.service)}>
            <option value="">{t('contact.chooseService')}</option>
            {capabilities.map((item) => <option key={item.id} value={item.id}>{t(item.titleKey)}</option>)}
          </select>
        </Field>
        <Field label={t('contact.budget')}>
          <select value={values.budget} onChange={(e) => update('budget', e.target.value)}>
            <option value="">{t('contact.chooseBudget')}</option>
            {budgets.map(([value, key]) => <option key={value} value={value}>{t(key)}</option>)}
          </select>
        </Field>
        <Field label={t('contact.timeline')} className={styles.full}>
          <select value={values.timeline} onChange={(e) => update('timeline', e.target.value)}>
            <option value="">{t('contact.chooseTimeline')}</option>
            {timelines.map(([value, key]) => <option key={value} value={value}>{t(key)}</option>)}
          </select>
        </Field>
        <Field label={t('contact.description')} error={errors.description} required className={styles.full}>
          <textarea rows={7} value={values.description} onChange={(e) => update('description', e.target.value)} aria-invalid={Boolean(errors.description)} />
        </Field>
      </div>

      <div className={styles.actions}>
        <button type="submit" className={styles.submit}>
          {t('contact.submit')} <Send size={17} aria-hidden="true" />
        </button>
        <span>{t('contact.submitHint')}</span>
      </div>

      {ready ? (
        <div className={styles.status} role="status">
          <strong>{t('contact.formReady')}</strong>
          <span>{t('contact.noMailClient')}</span>
        </div>
      ) : null}
    </form>
  );
}

interface FieldProps {
  label: string;
  children: ReactElement;
  error?: string;
  required?: boolean;
  className?: string;
}

function Field({ label, children, error, required = false, className = '' }: FieldProps) {
  return (
    <label className={`${styles.field} ${className}`}>
      <span>{label}{required ? <b aria-hidden="true"> *</b> : null}</span>
      {children}
      {error ? <small role="alert">{error}</small> : null}
    </label>
  );
}

