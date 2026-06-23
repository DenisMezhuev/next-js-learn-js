declare global {
    interface RequestInit {
        next?: {
            tags?: string[];
            revalidate?: number | false;
        };
    }
}

export {};