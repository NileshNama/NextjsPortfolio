import { NextResponse } from "next/server"

export function middleware(req) {
  const host = req.headers.get("host")
  if (!host) return NextResponse.next()

  const hostname = host.split(":")[0]
  const url = req.nextUrl.clone()

  if (hostname === "cv.nileshnama.com") {
    url.pathname = "/cv"
    return NextResponse.rewrite(url)
  }

  if (hostname === "books.nileshnama.com") {
    url.pathname = "/books"
    return NextResponse.rewrite(url)
  }

  if (hostname === "media.nileshnama.com") {
    url.pathname = "/media"
    return NextResponse.rewrite(url)
  }

  if (hostname === "projects.nileshnama.com") {
    url.pathname = "/projects"
    return NextResponse.rewrite(url)
  }

  if (hostname === "research.nileshnama.com") {
    url.pathname = "/research"
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/:path*"],
}
