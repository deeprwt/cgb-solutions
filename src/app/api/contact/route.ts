import { NextResponse } from "next/server";

export async function POST(req: any) {
  const { name, email, massage } = await req.json();

  console.log(name, email, massage);

  return NextResponse.json({ msg: "hi form contact to" });
}
