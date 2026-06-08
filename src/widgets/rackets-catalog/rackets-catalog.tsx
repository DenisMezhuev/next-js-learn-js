'use client'

import { useMemo } from 'react';
import { RacketCard } from "@/src/entities/racket-card";
import { rackets } from "@/src/shared/api/mock";
import {useBrandFilter} from "@/src/features/brand-filte/lib/hook";
import {SContainer, SWrapperContent, SContainerContent, SLabelContent} from "@/src/widgets/rackets-catalog/rackets-catalog.styles";
import {BrandFilter} from "@/src/features/brand-filte";
import {ROUTES} from "@/src/shared/config";

export const RacketsCatalog = () => {
    const {
        handleBrandSelect,
        filteredRackets,
        brandFilters,
        selectedBrand
    } = useBrandFilter(rackets);

    const racketCards = useMemo(() =>
            filteredRackets?.map(racket => (
                <RacketCard
                    key={racket.id}
                    url={racket.imageUrl}
                    nameBrand={racket.brand.name}
                    href={`${ROUTES.RACKETS}/${racket.id}`}
                />
            )),
        [filteredRackets]
    );

    return (
        <SContainer>
            <BrandFilter
                brandFilters={brandFilters}
                selectedBrand={selectedBrand}
                onBrandSelect={handleBrandSelect}
            />
            <SWrapperContent>
                <SLabelContent>Ракетки</SLabelContent>
                <SContainerContent>
                    {racketCards}
                </SContainerContent>
            </SWrapperContent>
        </SContainer>
    );
};