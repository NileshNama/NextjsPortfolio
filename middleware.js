import { NextResponse } from "next/server"

export function middleware(req) {
  const host = req.headers.get("host")
  if (!host) return NextResponse.next()

  const hostname = host.split(":")[0]

  if (hostname === "books.nileshnama.com") {
    return NextResponse.rewrite(new URL("/", req.url))
  }

  if (hostname === "cv.nileshnama.com") {
    return NextResponse.rewrite(new URL("/", req.url))
  }

  if (hostname === "media.nileshnama.com") {
    return NextResponse.rewrite(new URL("/", req.url))
  }

  if (hostname === "projects.nileshnama.com") {
    return NextResponse.rewrite(new URL("/", req.url))
  }

  if (hostname === "research.nileshnama.com") {
    return NextResponse.rewrite(new URL("/", req.url))
  }

  // main site
  if (
    hostname === "nileshnama.com" ||
    hostname === "www.nileshnama.com"
  ) {
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/:path*"],
}
