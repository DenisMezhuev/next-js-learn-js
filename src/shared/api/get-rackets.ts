import {BASE_API_URL} from "@/src/shared/api/constants";
import { TRacketList, TResponse} from "@/src/shared/api/rackets.types";

export const getRackets = async (
    page: number,
    limit: number = 999
): TResponse<TRacketList> => {
    const response = await fetch(
        `${BASE_API_URL}/products?page=${page}&limit=${limit}`);

    if (!response.ok) {
        return {
            isError: true,
            status: response.status,
            statusText: response.statusText,
            data: []
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