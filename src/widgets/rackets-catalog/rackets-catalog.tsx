import {getRackets} from "@/src/shared/api/get-rackets";
import {RacketsCatalogClient} from "@/src/widgets/rackets-catalog/rackets-catalog-client";
import {Suspense} from "react";


const RacketsCatalog = async () => {
    const { isError, data: rackets } = await getRackets(1);

    if (isError || !rackets) {
        return null;
    }

    return <Suspense fallback='Загрузка ракеток...'>
        <RacketsCatalogClient rackets={rackets} />
    </Suspense>
};

export default RacketsCatalog;