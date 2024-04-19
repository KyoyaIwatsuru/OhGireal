'use server';

import { sql } from '@vercel/postgres';
import { themes, users } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';
import { redirect } from 'next/navigation';

export async function fetchEndTime() {
  noStore();
  const now = new Date().toLocaleString('ja-JP', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  try {
    const themes = await sql<themes>`SELECT theme, start_time, end_time FROM themes WHERE start_time <= ${now} AND ${now} < end_time;`;
    return themes.rows.slice(-1)[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch end time.');
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

export async function CheckID(pageId: string) {
  noStore();

  try {
    const id = await sql<users>`SELECT id FROM users WHERE rand = ${pageId};`;
    return id.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch id.');
  }
}

export async function fetchVoteTime() {
  noStore();
  const now = new Date().toLocaleString('ja-JP', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  try {
    const themes = await sql<themes>`SELECT theme, end_time, vote_time FROM themes WHERE end_time <= ${now} AND ${now} < vote_time;`;
    return themes.rows.slice(-1)[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch vote time.');
  }
}

export async function fetchEntries() {
  noStore();

  try {
    const entries = await sql<users>`SELECT id, name, answer FROM users;`;
    return entries.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch users.');
  }
}

export async function updateSum(rank: { id: number, rank: number }[], pageId: string) {
  noStore();
  weightData(rank);

  try {
    for (let i = 0; i < rank.length; i++) {
      await sql<users>`UPDATE users SET sum = sum + ${rank[i].rank} WHERE id = ${rank[i].id};`;
    }
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to update sum.');
  }
  redirect(`/wait_vote/${pageId}`);
}

function weightData(rank: {id: number, rank: number}[]) {
  rank.map(r => {
    if (r.rank === 1) {
      r.rank = 20;
    } else if (r.rank === 2) {
      r.rank = 5;
    } else {
      r.rank = 1;
    }
  });
}

export async function fetchRank() {
  noStore();

  try {
    const rank = await sql<users>`SELECT id, name, answer, sum FROM users ORDER BY sum DESC;`;
    return rank.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch rank.');
  }
}
