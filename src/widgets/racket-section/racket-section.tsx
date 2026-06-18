import {
    SContainer,
    SProductName,
    SWrapper
} from "@/src/widgets/racket-section/racket-section.styles";
import {ROUTES} from "@/src/shared/config";
import {getRackets} from "@/src/shared/api/get-rackets";
import {getTopRackets} from "@/src/shared/api/get-top-rackets";
import {NavLink} from "@/src/shared/ui/nav-link";
import {RacketSectionItem} from "@/src/widgets/racket-section/racket-section-item";
import {Suspense} from "react";

 const RacketSection =  async ()=>{

    return (
        <SContainer>
            <SWrapper>
                <SProductName>Ракетки</SProductName>
               <NavLink url={ROUTES.RACKETS} text='Все' isActive={true}/>
            </SWrapper>
            <Suspense fallback='Загрузка ракеток...'>
                <RacketSectionItem
                    dataPromise={getRackets(1, 10)}
                />
            </Suspense>

            <Suspense fallback='Загрузка топ-10...'>
                <RacketSectionItem
                    title="Top 10"
                    dataPromise={getTopRackets()}
                />
            </Suspense>
        </SContainer>
    );
}

export default  RacketSection