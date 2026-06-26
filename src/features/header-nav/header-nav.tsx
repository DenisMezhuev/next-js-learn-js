'use client'

import {SContainer} from "./header-nav.styles";
import {NavLink} from "@/src/shared/ui/nav-link";
import { usePathname } from 'next/navigation';
import {ROUTES} from "@/src/shared/config";
import {useContext} from "react";
import {UserContext} from "@/src/widgets/user-provider/user-provider";
import Logout from "@/src/widgets/logout/logout";
import {UserSection} from "@/src/features/user-section";

export const HeaderNav = ()=>{
    const pathname = usePathname();
    const userData = useContext(UserContext);

    return (
        <SContainer>
            <NavLink url={ROUTES.HOME} isActive={pathname === ROUTES.HOME} text='Главная'/>
            <NavLink url={ROUTES.RACKETS} isActive={pathname === ROUTES.RACKETS} text='Ракетки'/>
            <NavLink url={ROUTES.RACKETS_TOP_10} isActive={pathname === ROUTES.RACKETS_TOP_10} text='Топ 10 ракеток'/>
            <UserSection userData={userData} pathname={pathname}/>
        </SContainer>
    );
}