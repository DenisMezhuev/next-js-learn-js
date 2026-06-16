export type TBrand = {
    id: number;
    name: string;
}


export type TRacket ={
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    type: 'racket';
    model: string;
    year: number;
    top10: boolean;
    description: string;
    brandId: number;
    brand: TBrand;
}


export type TRacketList = TRacket[];