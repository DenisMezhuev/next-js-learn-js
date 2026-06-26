'use client';

import { useActionState, useEffect } from 'react';
import loginAction from './login-action';
import {AuthForm} from "@/src/shared/ui/auth-form";

export const LoginPage = () => {
    const [state, formAction, isPending] = useActionState(loginAction, {});

    useEffect(() => {
        if (state.redirectUrl) {
            document.location.assign(state.redirectUrl);
        }
    }, [state.redirectUrl]);

    return (
        <AuthForm
            title="Вход"
            fields={[
                {
                    name: 'login',
                    label: 'Логин',
                    type: 'text',
                    placeholder: 'Введите логин',
                    defaultValue: state.previousValue?.login,
                    required: true,
                },
                {
                    name: 'password',
                    label: 'Пароль',
                    type: 'password',
                    placeholder: 'Введите пароль',
                    defaultValue: state.previousValue?.password,
                    required: true,
                },
            ]}
            submitText="Войти"
            submitPendingText="Вход..."
            isPending={isPending}
            error={state.error ? 'Неверный логин или пароль' : undefined}
            formAction={formAction}
            link={{
                text: 'Нет аккаунта?',
                href: '/signup',
                label: 'Зарегистрироваться',
            }}
        />
    );
};