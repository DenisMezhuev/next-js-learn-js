import RacketsCatalogTop from "@/src/widgets/rackets-catalog-top";
import {getTopRackets} from "@/src/shared/api/get-top-rackets";
import {notFound} from "next/navigation";
import {Metadata} from "next";
import {HttpError} from "@/src/shared/errors";

export const metadata: Metadata = {
    title: "Топ теннисных ракеток",
    description:
        "Самые популярные и лучшие теннисные ракетки по версии наших клиентов. Топ-модели для профессиональной и любительской игры.",
};

export default async function Page() {

    const { data, isError,status,statusText} = await getTopRackets();

    if (isError && !data){
       return  notFound();
    }


    if (isError) {
        throw new HttpError({ status, statusText })
    }

    return <RacketsCatalogTop racketsDataTop={data}/>
}