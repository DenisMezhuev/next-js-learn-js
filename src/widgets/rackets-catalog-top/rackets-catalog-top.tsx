import {SContainer, SContent, SProductName, SWrapper} from "@/src/widgets/racket-section/racket-section.styles";
import {JSX} from "react";
import {RacketCard} from "@/src/entities/racket-card";
import {ROUTES} from "@/src/shared/config";
import {TRacket} from "@/src/shared/api/rackets.types";

const RacketsCatalogTop =({racketsDataTop}:{ racketsDataTop: TRacket[]})=>
      (<SContainer>
            <SWrapper>
                <SProductName>Ракетки топ 10</SProductName>
            </SWrapper>
            <SContent>
                    {racketsDataTop?.map((racket):  JSX.Element => (
                        <RacketCard
                            key={racket.id}
                            url={racket.imageUrl}
                            nameBrand={racket.brand.name}
                            href={`${ROUTES.RACKETS}/${racket.id}`}
                        />
                    ))}
            </SContent>
        </SContainer>)



export default RacketsCatalogTop