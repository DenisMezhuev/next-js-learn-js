import {useState} from "react";
import {TRacketList} from "@/src/shared/api/rackets.types";
import {EBrandFilter} from "@/src/shared/config";


export const useBrandFilter = (rackets: TRacketList) => {
    const [selectedBrand, setSelectedBrand] = useState<string>(EBrandFilter.ALL);
    const groupedRackets = new Map(Object.entries(rackets.reduce((acc, curr) => {
        const brandName = curr.brand.name;

        if (acc[brandName]) {

            acc[brandName] = [...acc[brandName], curr];
        } else {

            acc[brandName] = [curr];
        }
        acc[EBrandFilter.ALL] = rackets
        return acc;
    }, {})));

    const brandFilters = Array.from(groupedRackets).map(elem => elem[0]).sort();
    const filteredRackets = groupedRackets.get(selectedBrand) || [];

    return{
        setSelectedBrand,
        filteredRackets,
        brandFilters,
        selectedBrand
   }

}
