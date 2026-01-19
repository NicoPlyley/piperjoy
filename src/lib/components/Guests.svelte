<script lang="ts">
	import { Check, X } from '@lucide/svelte';

	interface Props {
		id: string;
		guestInfo: { id: string; firstName: string; lastName: string; attending: boolean }[];
		initial: boolean;
	}

	let { id, guestInfo = $bindable(), initial }: Props = $props();

	let guest = $derived(guestInfo.find((g) => g.id === id));

	if (!guest) {
		throw new Error('Guest not found.');
	}

	const handleAttendanceChange = (value: boolean) => {
		guest.attending = value;
	};

	const removeGuest = (id: string) => {
		guestInfo = guestInfo.filter((guest) => guest.id !== id);
	};
</script>

<div
	class="relative mb-4 rounded-xl border border-bear-medium/20 bg-bear-cream/30 p-6 @lg:flex-row @lg:justify-between @lg:gap-4"
>
	{#if !initial}
		<button
			type="button"
			onclick={() => removeGuest(id)}
			class="absolute top-4 right-4 rounded-full bg-white p-2 shadow-md"
		>
			<X class="h-4 w-4" />
		</button>
	{/if}
	<p class="mb-4 text-xs font-bold tracking-wider text-bear-medium uppercase">
		{#if !initial}
			Additional Guest
		{:else}
			Primary Guest
		{/if}
	</p>

	<!-- Input Fields -->
	<div class="flex flex-col @lg:flex-row @lg:gap-4">
		<div class="form-group">
			<label for="first_name-{id}">First Name</label>
			<input id="first_name-{id}" required bind:value={guest.firstName} type="text" />
		</div>

		<div class="form-group">
			<label for="last_name-{id}">Last Name</label>
			<input id="last_name-{id}" required bind:value={guest.lastName} type="text" />
		</div>
	</div>

	<!-- Attendance -->
	<p class="label">Attendance</p>
	<div class="flex gap-2">
		<button
			type="button"
			onclick={() => handleAttendanceChange(true)}
			class="flex w-full items-center rounded-lg border-2 border-white bg-white p-3 text-center shadow-sm transition-all {guest.attending &&
				'border-bear-dark! bg-bear-dark! text-white!'}"
		>
			<Check class="mr-2" />
			Joyfully Accepts
		</button>

		<button
			type="button"
			onclick={() => handleAttendanceChange(false)}
			class="flex w-full items-center rounded-lg border-2 border-white bg-white p-3 text-center shadow-sm transition-all {!guest.attending &&
				'border-bear-dark! bg-bear-dark! text-white!'}"
		>
			<X class="mr-2" />
			Regretfully Declines
		</button>
		<input type="hidden" name="isAttending-{id}" bind:value={guest.attending} />
	</div>
</div>
