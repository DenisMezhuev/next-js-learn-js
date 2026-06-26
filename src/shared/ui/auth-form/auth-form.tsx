'use client';

import {
    SForm,
    STitle,
    SFieldGroup,
    SLabel,
    SInput,
    SError,
    SButton,
    SLinkWrapper,
    SLink,
} from './auth-form.styles';

interface IAuthFormField {
    name: string;
    label: string;
    type: 'text' | 'password' | 'email';
    placeholder?: string;
    defaultValue?: string;
    required?: boolean;
}

interface IAuthFormProps {
    title: string;
    fields: IAuthFormField[];
    submitText: string;
    submitPendingText?: string;
    isPending: boolean;
    error?: string;
    formAction: (formData: FormData) => void;
    link?: {
        text: string;
        href: string;
        label?: string;
    };
    className?: string;
}

export const AuthForm = ({ title,  fields,  submitText,  submitPendingText,  isPending,  error,  formAction,  link, className}: IAuthFormProps) => {
    return (
        <SForm action={formAction} className={className}>
            <STitle>{title}</STitle>

            {fields.map((field) => (
                <SFieldGroup key={field.name}>
                    <SLabel htmlFor={field.name}>{field.label}</SLabel>
                    <SInput
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        defaultValue={field.defaultValue}
                        required={field.required}
                        disabled={isPending}
                    />
                </SFieldGroup>
            ))}

            {error && <SError>{error}</SError>}

            <SButton type="submit" disabled={isPending}>
                {isPending ? submitPendingText || 'Загрузка...' : submitText}
            </SButton>

            {link && (
                <SLinkWrapper>
                    {link.text}{' '}
                    <SLink href={link.href}>{link.label || link.text}</SLink>
                </SLinkWrapper>
            )}
        </SForm>
    );
};