import {rackets} from "@/src/shared/api/mock";

export const racketsById = new Map(rackets.map(racket => [racket.id, racket]))


