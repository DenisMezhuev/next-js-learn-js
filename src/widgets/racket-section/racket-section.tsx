import {
    SContainer, SContent,
    SProductName,
    SWrapper
} from "@/src/widgets/racket-section/racket-section.styles";
import {RacketCard} from "@/src/entities/racket-card";
import {JSX, Suspense} from "react";
import {ROUTES} from "@/src/shared/config";
import {getRackets} from "@/src/shared/api/get-rackets";
import {getTopRackets} from "@/src/shared/api/get-top-rackets";
import {NavLink} from "@/src/shared/ui/nav-link";

 const RacketSection =  async ()=>{

    const { data: RacketsData} = await getRackets(1,10);
    const { data: RacketsDataTop} = await  getTopRackets();

    return (
        <SContainer>
            <SWrapper>
                <SProductName>Ракетки</SProductName>
               <NavLink url={ROUTES.RACKETS} text='Все' isActive={true}/>
            </SWrapper>
            <Suspense fallback={<div>Loading...</div>}>
                <SContent>
                    {RacketsData?.map((racket):  JSX.Element => (
                        <RacketCard
                            key={racket.id}
                            url={racket.imageUrl}
                            nameBrand={racket.brand.name}
                            href={`${ROUTES.RACKETS}/${racket.id}`}
                        />
                    ))}
                </SContent>
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
                <div>Топ 10</div>
                <SContent>
                    {RacketsDataTop?.map((racket):  JSX.Element => (
                        <RacketCard
                            key={racket.id}
                            url={racket.imageUrl}
                            nameBrand={racket.brand.name}
                            href={`${ROUTES.RACKETS}/${racket.id}`}
                        />
                    ))}
                </SContent>
            </Suspense>
        </SContainer>
    );
}

export default  RacketSection