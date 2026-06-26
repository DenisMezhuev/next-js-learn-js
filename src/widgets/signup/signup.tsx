'use client';

import { useActionState, useEffect } from 'react';
import { signupAction } from './signup-action';
import {AuthForm} from "@/src/shared/ui/auth-form";

export const SignupPage = () => {
    const [state, formAction, isPending] = useActionState(signupAction, {});

    useEffect(() => {
        if (state.redirectTo) {
            document.location.assign(state.redirectTo);
        }
    }, [state.redirectTo]);

    return (
        <AuthForm
            title="Регистрация"
            fields={[
                {
                    name: 'login',
                    label: 'Логин',
                    type: 'text',
                    placeholder: 'Придумайте логин',
                    defaultValue: state.previousValue?.login,
                    required: true,
                },
                {
                    name: 'password',
                    label: 'Пароль',
                    type: 'password',
                    placeholder: 'Придумайте пароль',
                    defaultValue: state.previousValue?.password,
                    required: true,
                },
                {
                    name: 'confirmPassword',
                    label: 'Подтверждение пароля',
                    type: 'password',
                    placeholder: 'Повторите пароль',
                    required: true,
                },
            ]}
            submitText="Зарегистрироваться"
            submitPendingText="Регистрация..."
            isPending={isPending}
            error={state.error}
            formAction={formAction}
            link={{
                text: 'Уже есть аккаунт?',
                href: '/login',
                label: 'Войти',
            }}
        />
    );
};