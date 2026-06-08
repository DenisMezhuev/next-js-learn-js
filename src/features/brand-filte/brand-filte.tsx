'use client'

import {
    SFilter, SFilterItem,
    SLabel,
    SWrapperFilter
} from "@/src/features/brand-filte/brand-filte.styles";
import {JSX} from "react";


export const BrandFilter: ({brandFilters, selectedBrand, onBrandSelect}: {
    brandFilters:  string[];
    selectedBrand: string;
    onBrandSelect: (brand: string) => void;
}) => JSX.Element = ({brandFilters, selectedBrand, onBrandSelect}) => {
    return (
        <SWrapperFilter>
            <SLabel>Бренд</SLabel>
            <SFilter>
                {brandFilters.map(brand => (
                    <SFilterItem
                        key={brand}
                        onClick={() => onBrandSelect(brand)}
                        $isActive={selectedBrand === brand}
                    >
                        {brand}
                    </SFilterItem>
                ))}
            </SFilter>
        </SWrapperFilter>
    );
};