import {ErrorPage} from "@/src/widgets/error";


interface IGlobalErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function GlobalError({ error, reset }: IGlobalErrorProps) {

    return (
        <html>
        <body>
        <ErrorPage
            statusCode={500}
            title="Критическая ошибка"
            message={error.message || 'Что-то пошло не так'}
            description="Пожалуйста, попробуйте обновить страницу или обратитесь в поддержку"
            showHomeButton
            showRetryButton
            onRetry={reset}
        />
        </body>
        </html>
    );
}