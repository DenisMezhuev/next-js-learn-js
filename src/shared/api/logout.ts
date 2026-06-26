'use server';


import {cookies} from "next/headers";
import {TResponse} from "@/src/shared/api/rackets.types";
import {BASE_API_URL} from "@/src/shared/api/constants";

export async function logout(): TResponse<null> {
    try {
        const cookiesStore = await cookies();
        const response = await fetch(`${BASE_API_URL}/auth/logout`, {
            credentials: "include",
            method: "DELETE",
            headers: {
                Cookie: cookiesStore.toString(),
            },
        });

        return {
            isError: false,
            status: response.status,
            statusText: response.statusText,
            data: null,
        };
    } catch  (error)  {
        return {
            isError: true,
            status: 500,
            statusText: error instanceof Error ? error.message : 'Unknown error',
            data: null,
        };
}}