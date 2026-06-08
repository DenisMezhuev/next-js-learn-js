import {SImg, SNameBrand, SWrapperCard} from "@/src/entities/racket-card/racket-card.styles";


export const RacketCard = ({url, href, nameBrand}: { url: string, href: string, nameBrand: string})=>{

    return(
        <SWrapperCard href={href}>
            <SImg src={url} alt={nameBrand}/>
            <SNameBrand>{nameBrand}</SNameBrand>
        </SWrapperCard>
    )
}