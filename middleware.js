import { NextResponse } from "next/server"

export function middleware(req) {
  const host = req.headers.get("host")

  if (!host) return NextResponse.next()

  const hostname = host.split(":")[0]

  // CV
  if (hostname === "cv.nileshnama.com") {
    return NextResponse.rewrite(new URL("/(cv)", req.url))
  }

  // Books
  if (hostname === "books.nileshnama.com") {
    return NextResponse.rewrite(new URL("/(books)", req.url))
  }

  // Media
  if (hostname === "media.nileshnama.com") {
    return NextResponse.rewrite(new URL("/(media)", req.url))
  }

  // Projects
  if (hostname === "projects.nileshnama.com") {
    return NextResponse.rewrite(new URL("/(projects)", req.url))
  }

  // Research
  if (hostname === "research.nileshnama.com") {
    return NextResponse.rewrite(new URL("/(research)", req.url))
  }

  // Main site
  if (
    hostname === "nileshnama.com" ||
    hostname === "www.nileshnama.com"
  ) {
    return NextResponse.rewrite(new URL("/", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/:path*"],
}
