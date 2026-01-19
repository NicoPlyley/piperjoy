import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const rsvps = sqliteTable('rsvps', {
	// Use a string ID to match the crypto.randomUUID() you're generating
	id: text('id').primaryKey(),
	firstName: text('first_name').notNull(),
	lastName: text('last_name').notNull(),
	// SQLite doesn't have a boolean type, so we use integer (0 or 1)
	attending: integer('attending', { mode: 'boolean' }).notNull().default(true)
});
