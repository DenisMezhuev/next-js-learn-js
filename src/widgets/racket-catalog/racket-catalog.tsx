import {
    SBrandName,
    SContentWrapper,
    SDescription, SImgContainer,
    SModel, SPrice,
    SWrapperBrand, SWrapperPrice
} from "@/src/widgets/racket-catalog/racket-catalog.styles";
import {TRacket} from "@/src/shared/api/rackets.types";
import {Favorite} from '@/src/features/favorite'

export const RacketCatalog = ({racket}:{racket: TRacket })=>
          <SContentWrapper>
             <SWrapperBrand>
                <SBrandName>{racket?.brand.name}</SBrandName>
                <SModel>{racket?.model}</SModel>
                <SDescription>{racket?.description}</SDescription>
                 {racket?.userData && <Favorite isFavorite={racket.userData.isFavorite} />}
             </SWrapperBrand>
             <SImgContainer src={`${racket?.imageUrl}`}  alt={racket?.model ?? ''}/>
              <SWrapperPrice>
                  <SPrice> € {racket?.price}</SPrice>
              </SWrapperPrice>
          </SContentWrapper>
