import { asc, count, eq, getTableColumns, gt, sql } from "drizzle-orm";
import { db } from "../index";
import { SelectUser, postsTable, usersTable } from "../schema";

export async function getUserById(id: SelectUser["id"]): Promise<
  {
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
> {
  return db.select().from(usersTable).where(eq(usersTable.id, id));
}

export async function getUsersWithPostsCount(
  page = 1,
  pageSize = 5,
): Promise<
  {
    postsCount: number;
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
> {
  return db
    .select({
      ...getTableColumns(usersTable),
      postsCount: count(postsTable.id),
    })
    .from(usersTable)
    .leftJoin(postsTable, eq(usersTable.id, postsTable.userId))
    .groupBy(usersTable.id)
    .orderBy(asc(usersTable.id))
    .limit(pageSize)
    .offset((page - 1) * pageSize);
}

export async function getPostsForLast24Hours(
  page = 1,
  pageSize = 5,
): Promise<
  {
    id: number;
    title: string;
  }[]
> {
  return db
    .select({
      id: postsTable.id,
      title: postsTable.title,
    })
    .from(postsTable)
    .where(gt(postsTable.createdAt, sql`(datetime('now','-24 hour'))`))
    .orderBy(asc(postsTable.title), asc(postsTable.id))
    .limit(pageSize)
    .offset((page - 1) * pageSize);
}