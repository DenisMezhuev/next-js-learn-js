import {TResponse} from "@/src/shared/api/rackets.types";
import {BASE_API_URL} from "@/src/shared/api/constants";

export async function login(request: {
    login: string;
    password: string;
}): TResponse<string[] | null> {
    try {
        const response = await fetch(`${BASE_API_URL}/auth/login`, {
            body: JSON.stringify(request),
            method: "POST",
        });

        if (!response.ok) {
            return {
                isError: true,
                status: response.status,
                statusText: response.statusText,
                data: null,
            };
        }

        const setCookieHeader = response.headers.getSetCookie();

        return {
            isError: false,
            status: response.status,
            statusText: response.statusText,
            data: setCookieHeader,
        };
    } catch  (error)  {
        return {
            isError: true,
            status: 500,
            statusText: error instanceof Error ? error.message : 'Unknown error',
            data: null,
        };
    }
}