import { sql } from '@vercel/postgres';
import { themes, users } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';
import { redirect } from 'next/navigation';

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

export async function addUser(name: string, answer: string) {
  noStore();

  const rand = Math.floor(Math.random() *  1000)

  try {
    await sql`INSERT INTO users (name, answer, sum, rand) VALUES (${name}, ${answer}, 0, ${rand});`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to add user.');
  }
  redirect(`/wait_answer/${rand}`);
}