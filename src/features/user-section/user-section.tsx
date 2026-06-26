"use client"

import Logout from "@/src/widgets/logout/logout";
import {NavLink} from "@/src/shared/ui/nav-link";
import {ROUTES} from "@/src/shared/config";
import {TUser} from "@/src/shared/api/rackets.types";


export const UserSection = ({userData, pathname}: {userData:  TUser | null, pathname: string})=> (
    userData?.login ? (
        <>
            <div>{userData.login}</div>
            <Logout />
        </>
    ) : (
        <>
            <NavLink url={ROUTES.LOGIN} isActive={pathname === ROUTES.LOGIN} text='Войти' />
            <NavLink url={ROUTES.SIGNUP} isActive={pathname === ROUTES.SIGNUP} text='Зарегистрироваться' />
        </>
    )
)