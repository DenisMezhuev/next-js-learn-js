'use client'

import {
    SAllProduct,
    SContainer, SContent,
    SProductName,
    SWrapper
} from "@/src/widgets/racket-section/racket-section.styles";
import {rackets} from "@/src/shared/api/mock";
import {useExpandList} from "@/src/widgets/racket-section/lib/hook";
import {RacketCard} from "@/src/entities/racket-card";
import {JSX, useMemo} from "react";
import {ROUTES} from "@/src/shared/config";

export const RacketSection = ()=>{
    const DEFAULT_CARD = 3;
    const { expand, isExpanded,visibleRackets,collapse}  = useExpandList(rackets, DEFAULT_CARD);

    const renderElement =  useMemo(()=>visibleRackets.map((racket):  JSX.Element => (
        <RacketCard
            key={racket.id}
            url={racket.imageUrl}
            nameBrand={racket.brand.name}
            href={`${ROUTES.RACKETS}/${racket.id}`}
        />
    )),[visibleRackets]);


    return (
        <SContainer>
            <SWrapper>
                <SProductName>Ракетки</SProductName>
                <SAllProduct onClick={isExpanded ? collapse : expand}>
                        {isExpanded ? 'Свернуть' : 'Все'}
                </SAllProduct>
            </SWrapper>
            <SContent>
                {renderElement}
            </SContent>
        </SContainer>
    );
}