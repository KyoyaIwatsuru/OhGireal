import { sql } from '@vercel/postgres';
import { themes, users } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchTheme() {
  noStore();

  try {
    const theme = await sql<themes>`SELECT theme FROM themes WHERE id = 2;`;
    return theme.rows[0].theme;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch theme.');
  }
}