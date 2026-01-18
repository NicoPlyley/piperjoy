<script lang="ts">
	import { Guests } from '$lib/components';
	import { Plus } from '@lucide/svelte';

	// let numberOfGuests = $state(0);

	let guestInfo = $state([{ id: 1, firstName: '', lastName: '', attending: true }]);

	const addGuest = () => {
		guestInfo.push({ id: guestInfo.length + 1, firstName: '', lastName: '', attending: true });
	};
</script>

<div
	class="mx-auto my-20 w-full max-w-150 overflow-hidden rounded-2xl border-6 border-bear-cream bg-white"
>
	<!-- Title -->
	<div class="bg-bear-dark p-8 text-center">
		<h5 class="mb-2 text-3xl font-normal text-white">R.S.V.P.</h5>
		<p class="font-bold text-bear-medium uppercase">Please respond by February 14th</p>
	</div>

	<!-- Form -->
	<form class="@container mx-7 my-8">
		{#each guestInfo as guest (guest.id)}
			<Guests bind:guestInfo id={guest.id} />
		{/each}

		<div
			class="mt-6 mb-6 flex items-center justify-between border-t border-dashed border-t-bear-medium/30 pt-6"
		>
			<p>Total Guest: {guestInfo.length}</p>
			<button
				class="flex items-center rounded-full border border-bear-medium/20 bg-white px-4 py-2 text-sm font-bold text-bear-dark shadow-sm transition-colors hover:text-bear-medium"
				onclick={(e) => {
					e.preventDefault();
					addGuest();
				}}
			>
				<Plus class="mr-2 h-5 w-5 rounded-full bg-bear-dark text-white" />
				Add Another Guest
			</button>
		</div>

		<button class="w-full rounded-2xl bg-bear-dark p-4 text-center text-lg font-bold text-white"
			>Send {guestInfo.length > 1 ? 'Responses' : 'Response'}</button
		>
	</form>
</div>
