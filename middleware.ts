import { NextRequest } from 'next/server';
import { COOKIES } from './types';
// import { PATHS } from '@/constants';

export default async function middleware(request: NextRequest) {
  const cookie = request.cookies.get(COOKIES.TOKEN);
  console.log('cookie', cookie);
}
