import RacketsCatalogTop from "@/src/widgets/rackets-catalog-top";
import {getTopRackets} from "@/src/shared/api/get-top-rackets";
import {notFound} from "next/navigation";


export default async function Page() {

    const { data, isError} = await getTopRackets();

    if (isError || !data){
       return  notFound();
    }

    return <RacketsCatalogTop racketsDataTop={data}/>
}