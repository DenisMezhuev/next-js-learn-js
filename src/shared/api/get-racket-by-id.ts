import {BASE_API_URL} from "@/src/shared/api/constants";
import { TRacketProduct, TResponse} from "@/src/shared/api/rackets.types";

export const getRacketById = async (
    racketId: number,
): TResponse<TRacketProduct> => {
    const response = await fetch(`${BASE_API_URL}/product/${racketId}`);

    if (!response.ok) {
        return {
            isError: true,
            data: undefined,
        };
    }

    const rackets: TRacketProduct = await response.json();

    return {
        isError: false,
        data: rackets,
    };
};