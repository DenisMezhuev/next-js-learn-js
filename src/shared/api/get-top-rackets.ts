import {BASE_API_URL, TOP_10} from "@/src/shared/api/constants";
import { TRacketList, TResponse} from "@/src/shared/api/rackets.types";

export const getTopRackets = async (): TResponse<TRacketList> => {

        const response = await fetch(`${BASE_API_URL}/${TOP_10}`);
        if (!response.ok) {
            return {
                isError: true,
                data: [],
            };
        }

        const rackets: TRacketList = await response.json();

        return {
            isError: false,
            data: rackets,
        };
};