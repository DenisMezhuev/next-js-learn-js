import {racketsById} from "@/src/widgets/racket-catalog/lib/rackets-by-id";
import {RacketCatalog} from "@/src/widgets/racket-catalog";


export async function generateStaticParams() {

    return Array.from(racketsById.keys()).map((id) => ({
        id: String(id),
    }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;

    const racket = racketsById.get(Number(id));

    if (!racket) return <div>Ракетка не найдена</div>;



    return <RacketCatalog racket={racket} />;
}