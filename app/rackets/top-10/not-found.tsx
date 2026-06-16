import Link from 'next/link';

export default function TopRacketsNotFound() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px',
            padding: '20px',
            textAlign: 'center',
        }}>
            <h2>Ракетки не найдены</h2>
            <Link
                href="/"
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#0070f3',
                    color: 'white',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    marginTop: '10px',
                }}
            >
                На главную
            </Link>
        </div>
    );
}