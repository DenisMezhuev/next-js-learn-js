"use client";

import { createContext, PropsWithChildren } from "react";
import {TUser} from "@/src/shared/api/rackets.types";


export const UserContext = createContext<TUser  | null>(null);

interface Props {
    userData: TUser | null;
}

export default function UserProvider(props: PropsWithChildren<Props>) {
    return (
        <UserContext.Provider value={props.userData}>
            {props.children}
        </UserContext.Provider>
    );
}