import { NextRequest } from 'next/server';
import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

export async function POST(req: NextRequest) {
  noStore();

  try {
    const body = await req.json();
    const token = body.token;
    await sql`INSERT INTO tokens (token) VALUES (${token});`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to send token.');
  }
}
