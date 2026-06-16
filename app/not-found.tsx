import Link from 'next/link';

export default function NotFound() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '20px',
            textAlign: 'center',
        }}>
            <h1 style={{ fontSize: '72px', margin: '0' }}>404</h1>
            <h2 style={{ fontSize: '24px', margin: '10px 0' }}>Страница не найдена</h2>
            <p style={{ color: '#666', marginBottom: '20px' }}>
                Извините, запрашиваемая страница не существует.
            </p>
            <Link
                href="/"
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#0070f3',
                    color: 'white',
                    borderRadius: '5px',
                    textDecoration: 'none',
                }}
            >
                Вернуться на главную
            </Link>
        </div>
    );
}