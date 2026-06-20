import {RacketCatalog} from "@/src/widgets/racket-catalog";
import {getRacketById} from "@/src/shared/api/get-racket-by-id";
import {notFound} from "next/navigation";
import {Metadata} from "next";
import {HttpError} from "@/src/shared/errors";

export const generateMetadata = async ({ params}): Promise<Metadata> => {
  const { racketId } = await params;

  const { isError, data: racketMetadata } = await getRacketById(+racketId);

  if (isError || !racketMetadata)
    return {
      title: "Ракетка не найдена",
      description: "Запрошенная модель ракетки недоступна или была удалена.",
    };

  return {
    title: racketMetadata.product.name,
    description: racketMetadata.product.description,
  };
};

export default async function Page({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params;

  const {data, isError,statusText,status} = await getRacketById(Number(id));

    if (isError && !data) {
      return   notFound();
    }

  if (isError) {
    throw new HttpError({ status, statusText })
  }

    return <RacketCatalog racket={data.product} />;
}