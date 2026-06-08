'use client'

import {useParams} from "next/navigation";
import {
    SBrandName,
    SContentWrapper,
    SDescription, SImgContainer,
    SModel, SPrice,
    SWrapperBrand, SWrapperPrice
} from "@/src/widgets/racket-catalog/racket-catalog.styles";
import {racketsById} from "@/src/widgets/racket-catalog/lib/rackets-by-id";

export const RacketCatalog = ()=>{
   const params =  useParams();
    const racketCatalog = racketsById.get(+params.id) ;

    if (!racketCatalog) {
        return <div>Ракетка не найдена</div>;
    }


      return(
          <SContentWrapper>
             <SWrapperBrand>
                <SBrandName>{racketCatalog?.brand.name}</SBrandName>
                <SModel>{racketCatalog?.model}</SModel>
                <SDescription>{racketCatalog?.description}</SDescription>
             </SWrapperBrand>
             <SImgContainer src={`${racketCatalog?.imageUrl}`}  alt={racketCatalog?.model ?? ''}/>
              <SWrapperPrice>
                  <SPrice> € {racketCatalog?.price}</SPrice>
              </SWrapperPrice>

          </SContentWrapper>
      )
}