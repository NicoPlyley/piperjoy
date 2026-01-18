<script lang="ts">
	import { Check, X } from '@lucide/svelte';

	interface Props {
		id: number;
		guestInfo: { firstName: string; lastName: string; attending: boolean }[];
	}

	let { id, guestInfo = $bindable() }: Props = $props();

	let isAttending = $state(true);

	const handleAttendanceChange = (value: boolean) => {
		isAttending = value;
	};

	const removeGuest = (id: number) => {
		guestInfo = guestInfo.filter((guest) => guest.id !== id);
	};
</script>

<div
	class="relative mb-4 rounded-xl border border-bear-medium/20 bg-bear-cream/30 p-6 @lg:flex-row @lg:justify-between @lg:gap-4"
>
	{#if id !== 1}
		<button
			onclick={(e) => {
				e.preventDefault();
				removeGuest(id);
			}}
			class="absolute top-4 right-4 rounded-full bg-white p-2 shadow-md"
		>
			<X class="h-4 w-4" />
		</button>
	{/if}
	<p class="mb-4 text-xs font-bold tracking-wider text-bear-medium uppercase">
		{#if id !== 1}
			Additional Guest
		{:else}
			Primary Guest
		{/if}
	</p>

	<!-- Input Fields -->
	<div class="flex flex-col @lg:flex-row @lg:gap-4">
		<div class="form-group">
			<label for="first_name-{id}">First Name</label>
			<input id="first_name-{id}" type="text" />
		</div>

		<div class="form-group">
			<label for="last_name-{id}">Last Name</label>
			<input id="last_name-{id}" type="text" />
		</div>
	</div>

	<!-- Attendance -->
	<p class="label">Attendance</p>
	<div class="flex gap-2">
		<input
			type="radio"
			name="attendance_main"
			value="yes"
			checked={isAttending}
			class="peer/yes sr-only"
		/>
		<button
			onclick={(e) => {
				e.preventDefault();
				handleAttendanceChange(true);
			}}
			class="flex w-full items-center rounded-lg border-2 border-white bg-white p-3 text-center shadow-sm transition-all peer-checked/yes:border-bear-dark peer-checked/yes:bg-bear-dark peer-checked/yes:text-white"
		>
			<Check class="mr-2" />
			Joyfully Accepts
		</button>

		<input
			type="radio"
			name="attendance_main"
			value="no"
			checked={!isAttending}
			class="peer/no sr-only"
		/>
		<button
			onclick={(e) => {
				e.preventDefault();
				handleAttendanceChange(false);
			}}
			class="flex w-full items-center rounded-lg border-2 border-white bg-white p-3 text-center shadow-sm transition-all peer-checked/no:border-bear-dark peer-checked/no:bg-bear-dark peer-checked/no:text-white"
		>
			<X class="mr-2" />
			Regretfully Declines
		</button>
	</div>
</div>
