import { json } from '@sveltejs/kit';
import { drizzle } from 'drizzle-orm/d1';
import { rsvps } from '$lib/server/db/schema';
import type { RequestHandler } from './$types';

interface RSVPRequest {
	guests: {
		firstName: string;
		lastName: string;
		attending: boolean;
	}[];
}

export const POST: RequestHandler = async ({ request, platform }) => {
	try {
		const { guests } = (await request.json()) as RSVPRequest;

		// Check if platform and DB exist before initializing
		if (!platform?.env?.DB) {
			return json({ success: false, error: 'Database not found' }, { status: 500 });
		}

		const db = drizzle(platform.env.DB);

		await db.insert(rsvps).values(
			guests.map((g) => ({
				id: crypto.randomUUID(),
				firstName: g.firstName,
				lastName: g.lastName,
				attending: g.attending
			}))
		);

		return json({ success: true });
	} catch (err) {
		const errorMessage = err instanceof Error ? err.message : 'Unknown error';

		console.error('Drizzle/D1 Error:', errorMessage);
		return json({ success: false, error: errorMessage }, { status: 500 });
	}
};
