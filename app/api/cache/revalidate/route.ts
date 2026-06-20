import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (): Promise<NextResponse<{ text: string }>> => {
    revalidateTag("getTopRackets", "minutes");

    return NextResponse.json({ text: "success" });
};