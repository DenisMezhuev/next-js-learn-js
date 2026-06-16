import {
    SBrandName,
    SContentWrapper,
    SDescription, SImgContainer,
    SModel, SPrice,
    SWrapperBrand, SWrapperPrice
} from "@/src/widgets/racket-catalog/racket-catalog.styles";
import {TRacket} from "@/src/shared/api/rackets.types";

export const RacketCatalog = ({racket}:{racket: TRacket })=>
          <SContentWrapper>
             <SWrapperBrand>
                <SBrandName>{racket?.brand.name}</SBrandName>
                <SModel>{racket?.model}</SModel>
                <SDescription>{racket?.description}</SDescription>
             </SWrapperBrand>
             <SImgContainer src={`${racket?.imageUrl}`}  alt={racket?.model ?? ''}/>
              <SWrapperPrice>
                  <SPrice> € {racket?.price}</SPrice>
              </SWrapperPrice>
          </SContentWrapper>
