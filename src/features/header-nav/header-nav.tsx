'use client'

import {SContainer} from "./header-nav.styles";
import {NavLink} from "@/src/shared/ui/nav-link";
import { usePathname } from 'next/navigation';
import {ROUTES} from "@/src/shared/config";

export const HeaderNav = ()=>{
    const pathname = usePathname()
    return (
        <SContainer>
            <NavLink url={ROUTES.HOME} isActive={pathname === ROUTES.HOME} text='Главная'/>
            <NavLink url={ROUTES.RACKETS} isActive={pathname === ROUTES.RACKETS} text='Ракетки'/>
        </SContainer>
    );
}