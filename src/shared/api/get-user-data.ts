import {cookies} from "next/headers";
import {TResponse, TUser} from "@/src/shared/api/rackets.types";
import {BASE_API_URL} from "@/src/shared/api/constants";

export async function getUserData(): TResponse<TUser | null> {
    try {
        const cookiesStore = await cookies();

        const response = await fetch(`${BASE_API_URL}/auth/user`, {
            headers: {
                Cookie: cookiesStore.toString(),
            },
            credentials: "include",
        });

        if (!response.ok) {
            return {
                isError: true,
                status: response.status,
                statusText: response.statusText,
                data: null,
            };
        }

        const data = await response.json() as { user: TUser };

        return {
            isError: false,
            status: response.status,
            statusText: response.statusText,
            data: data.user,
        };
    } catch (error) {
        return {
            isError: true,
            status: 500,
            statusText: error instanceof Error ? error.message : 'Unknown error',
            data: null,
        };
    }
}