import {RacketCatalog} from "@/src/widgets/racket-catalog";
import {TRacket} from "@/src/shared/api/rackets.types";

 const RacketPage = ({racket}:{racket: TRacket}) => <RacketCatalog racket={racket}/>

export default RacketPage;