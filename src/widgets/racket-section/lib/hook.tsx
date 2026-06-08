import { useState} from "react";
import {TRacketList} from "@/src/shared/api/rackets.types";

export const useExpandList = (rackets: TRacketList, initialCount: number)=>{

    const [isExpanded, setIsExpanded] = useState(false);

    const visibleRackets = isExpanded
        ? rackets
        : rackets.slice(0, initialCount);

    const expand = () => setIsExpanded(true);
    const collapse = () => setIsExpanded(false);


    return{
        visibleRackets,
        expand,
        collapse,
        isExpanded
    }
}