import { NextResponse } from "next/server"

export function middleware(req) {
  const host = req.headers.get("host")?.split(":")[0]

  if (host === "cv.nileshnama.com") {
    return NextResponse.rewrite(new URL("/(cv)", req.url))
  }

  if (host === "books.nileshnama.com") {
    return NextResponse.rewrite(new URL("/(books)", req.url))
  }

  if (host === "media.nileshnama.com") {
    return NextResponse.rewrite(new URL("/(media)", req.url))
  }

  if (host === "projects.nileshnama.com") {
    return NextResponse.rewrite(new URL("/(projects)", req.url))
  }

  if (host === "research.nileshnama.com") {
    return NextResponse.rewrite(new URL("/(research)", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
}
