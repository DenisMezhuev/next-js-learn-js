'use client';

import React from 'react';
import Link from 'next/link';
import {
    SContainer,
    SErrorCode,
    SErrorTitle,
    SErrorMessage,
    SErrorDescription,
    SButtonGroup,
    SButton,
    SIconWrapper,
} from './error-page.styles';

interface IErrorPageProps {
    statusCode?: number;
    title?: string;
    message?: string;
    description?: string;
    icon?: React.ReactNode;
    showHomeButton?: boolean;
    showRetryButton?: boolean;
    onRetry?: () => void;
}

const DEFAULT_ERRORS = {
    400: { title: 'Плохой запрос', icon: '🤔' },
    401: { title: 'Требуется авторизация', icon: '🔒' },
    403: { title: 'Доступ запрещён', icon: '🚫' },
    404: { title: 'Страница не найдена', icon: '🔍' },
    500: { title: 'Внутренняя ошибка сервера', icon: '💥' },
    502: { title: 'Плохой шлюз', icon: '🌐' },
    503: { title: 'Сервис недоступен', icon: '🔧' },
    504: { title: 'Таймаут шлюза', icon: '⏱️' },
};

export const ErrorPage: React.FC<IErrorPageProps> = ({
    statusCode = 500,
    title,
    message,
    description,
    icon,
    showHomeButton = true,
    showRetryButton = false,
    onRetry,
    }) => {
    const defaultError = DEFAULT_ERRORS[statusCode as keyof typeof DEFAULT_ERRORS];

    const displayTitle = title || defaultError?.title || 'Что-то пошло не так';
    const displayIcon = icon || defaultError?.icon || '😵';
    const displayMessage = message || `Произошла ошибка ${statusCode}`;
    const displayDescription = description || 'Пожалуйста, попробуйте позже или обратитесь в поддержку.';

    const handleRetry = () => {
        if (onRetry) {
            onRetry();
        } else {
            window.location.reload();
        }
    };

    return (
        <SContainer>
            <SIconWrapper>{displayIcon}</SIconWrapper>

            <SErrorCode statusCode={statusCode}>{statusCode}</SErrorCode>

            <SErrorTitle>{displayTitle}</SErrorTitle>

            <SErrorMessage>{displayMessage}</SErrorMessage>

            <SErrorDescription>{displayDescription}</SErrorDescription>

            <SButtonGroup>
                {showHomeButton && (
                    <Link href="/" passHref legacyBehavior>
                        <SButton as="a" $primary>
                            🏠 На главную
                        </SButton>
                    </Link>
                )}

                {showRetryButton && (
                    <SButton onClick={handleRetry}>
                        🔄 Попробовать снова
                    </SButton>
                )}
            </SButtonGroup>
        </SContainer>
    );
};