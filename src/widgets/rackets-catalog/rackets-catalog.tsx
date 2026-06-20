import {getRackets} from "@/src/shared/api/get-rackets";
import {RacketsCatalogClient} from "@/src/widgets/rackets-catalog/rackets-catalog-client";

const RacketsCatalog = async () => {
    const { isError, data: rackets } = await getRackets(1);

    if (isError || !rackets) {
        return null;
    }

    return  <RacketsCatalogClient rackets={rackets} />

};

export default RacketsCatalog;