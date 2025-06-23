import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // Giriş yapılmışsa devam edilir
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return !!token; // oturum varsa true
      },
    },
  }
);

// Bu sayfalar korunur
export const config = {
  matcher: ["/protected/:path*"],
};
