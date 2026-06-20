import {BASE_API_URL, TOP_10} from "@/src/shared/api/constants";
import { TRacketList, TResponse} from "@/src/shared/api/rackets.types";

export const getTopRackets = async (): TResponse<TRacketList> => {

    const isServer = typeof window === 'undefined';

    const fetchOptions: RequestInit = {
        cache: isServer ? 'force-cache' : 'no-store',
    };

    if (isServer) {
        fetchOptions.next = {
            tags: ["getTopRackets"],
        };
    }

        const response = await fetch(`${BASE_API_URL}/${TOP_10}`);

        if (!response.ok) {
            return {
                isError: true,
                status: response.status,
                statusText: response.statusText,
                data: [],
            };
        }

        const rackets: TRacketList = await response.json();

        return {
            isError: false,
            status: response.status,
            statusText: response.statusText,
            data: rackets,
        };
};