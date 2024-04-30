import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

export async function POST() {
  noStore();

  try {
    const tokens = await sql`SELECT token FROM tokens;`;
    for (const token of tokens.rows) {
      await fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Accept-Encoding': 'gzip, deflate',
          'Connection': 'keep-alive',
        },
        body: JSON.stringify({
          to: token.token,
          title: 'OhGireal',
          body: 'あと５分でお題が出ます！'
        })
      });
    }
    return NextResponse.json({token: '送れたよ！'});
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to send token.');
  }
}
