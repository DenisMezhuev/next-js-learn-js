import {JSX} from "react";
import {SContent} from "@/src/widgets/racket-section/racket-section.styles";
import {RacketCard} from "@/src/entities/racket-card";
import {ROUTES} from "@/src/shared/config";
import { TRacketList, TResponse} from "@/src/shared/api/rackets.types";

type RacketSectionItemProps = {
    title?: string;
    dataPromise:TResponse<TRacketList>;
};

export const RacketSectionItem = async ({title, dataPromise }: RacketSectionItemProps): Promise<JSX> => {
    const { data } = await dataPromise;

    return (
        <>
            {title && <div>{title}</div>}
            <SContent>
                {data.map((racket) => (
                    <RacketCard
                        key={racket.id}
                        url={racket.imageUrl}
                        nameBrand={racket.brand.name}
                        href={`${ROUTES.RACKETS}/${racket.id}`}
                    />
                ))}
            </SContent>
        </>
    );
};