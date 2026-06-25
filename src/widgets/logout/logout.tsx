"use client";

import { useTransition } from "react";
import {logout} from "@/src/shared/api/logout";
import {useRouter} from "next/router";


export default function Logout() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    return (
        <button
            disabled={isPending}
            onClick={() => {
                startTransition(async () => {
                    await logout();
                    await router.push('/');
                });
            }}
        >
            Выйти
        </button>
    );
}