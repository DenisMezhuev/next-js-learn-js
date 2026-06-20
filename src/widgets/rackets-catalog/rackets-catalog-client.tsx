'use client';

import { TRacketList } from "@/src/shared/api/rackets.types";
import { useBrandFilter } from "@/src/features/brand-filte/lib/hook";
import {
    SContainer,
    SContainerContent,
    SLabelContent,
    SWrapperContent
} from "@/src/widgets/rackets-catalog/rackets-catalog.styles";
import { BrandFilter } from "@/src/features/brand-filte";
import { RacketCard } from "@/src/entities/racket-card";
import { ROUTES } from "@/src/shared/config";

export const RacketsCatalogClient = ({ rackets }: { rackets: TRacketList }) => {
    const {
        setSelectedBrand,
        filteredRackets,
        brandFilters,
        selectedBrand
    } = useBrandFilter(rackets);

    return (

            <SContainer>
                <BrandFilter
                    brandFilters={brandFilters}
                    selectedBrand={selectedBrand}
                    onBrandSelect={setSelectedBrand}
                />
                <SWrapperContent>
                    <SLabelContent>Ракетки</SLabelContent>
                    <SContainerContent>
                        {filteredRackets.map(racket => (
                            <RacketCard
                                key={racket.id}
                                url={racket.imageUrl}
                                nameBrand={racket.brand.name}
                                href={`${ROUTES.RACKETS}/${racket.id}`}
                            />
                        ))}
                    </SContainerContent>
                </SWrapperContent>
            </SContainer>

    );
};