import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const terBody = await req.json();
  console.log("hey hey ", terBody);
  try {
    const dat = await fetch(
      "https://35vaqd5ajd.execute-api.us-east-1.amazonaws.com/",
      {
        method: "POST",
        body: JSON.stringify({
          user: terBody.user,
          time: terBody.time,
          post: terBody.post,
        }),
      }
    );
    return NextResponse.json({ message: dat.json() }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: e }, { status: 500 });
  }
}
