import { sql } from '@vercel/postgres';
import { themes, users } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchThemes() {
  noStore();
  const now = new Date().toLocaleString();

  try {
    const themes = await sql<themes>`SELECT theme, start_time, end_time FROM themes WHERE start_time <= ${now} AND ${now} < end_time;`;
    return themes.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch themes.');
  }
}
