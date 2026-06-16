import {RacketCatalog} from "@/src/widgets/racket-catalog";
import {getRacketById} from "@/src/shared/api/get-racket-by-id";
import {notFound} from "next/navigation";


export default async function Page({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params;

  const {data, isError} = await getRacketById(Number(id));

    if (isError || !data) {
        notFound();
    }

    return <RacketCatalog racket={data.product} />;
}