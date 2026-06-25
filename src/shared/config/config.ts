import {TOP_10} from "@/src/shared/api/constants";

export enum EBrandFilter{
    ALL ='All',
}

export const ROUTES = {
    HOME: '/',
    RACKETS: '/rackets',
    RACKETS_TOP_10: `/rackets/${TOP_10}`,
    LOGIN: '/login',
    SIGNUP: '/signup',
} as const;