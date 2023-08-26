import { NextRequest, NextResponse } from 'next/server';
import { COOKIES } from './types';
import { PATHS } from './constants';

export default async function middleware(request: NextRequest) {
  const cookie = request.cookies.get(COOKIES.TOKEN);
  const { pathname } = request.nextUrl;
  if (cookie && (pathname === PATHS.LOGIN || pathname === PATHS.SIGNUP)) {
    return NextResponse.redirect(new URL(PATHS.HOME, request.url));
  }
  if (
    (pathname === PATHS.ACCOUNT ||
      pathname.includes(PATHS.MYGDATA) ||
      pathname === PATHS.HISTORY ||
      pathname === PATHS.OURGDATA) &&
    !cookie
  ) {
    return NextResponse.redirect(new URL(PATHS.LOGIN, request.url));
  }

  return NextResponse.next();
}
