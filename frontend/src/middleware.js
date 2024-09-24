import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function  middleware(req) {
  const token = req.cookies.get('jwt');
  console.log("Hello");
  console.log("JWT Token:", token); 

  const jwtToken = token ? token.value : null; 

  const { pathname } = req.nextUrl;
  const profileUsername = pathname.split('/')[2]; 
  console.log("Profile Username:", profileUsername);

  if (!jwtToken || typeof jwtToken !== 'string') {
    console.log("No valid JWT token found");
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }
  
  console.log("After checking token existence");

  try {
    const key = new TextEncoder().encode("rejghrejgoirrdvrdr");
    const { payload } = await jwtVerify(jwtToken, key);
    console.log("Decoded JWT:", payload);
    console.log("Decoded done");

    if (payload.username !== profileUsername) {
      console.log("Last0")
      return NextResponse.redirect(new URL("/auth/signin", req.url));
    }
    console.log("Last1")

    return NextResponse.next();
  } catch (error) {
    console.log("Error during JWT verification:", error);
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }
}

export const config = {
  matcher: ['/profile/:path*'],
};
