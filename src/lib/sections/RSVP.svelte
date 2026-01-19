<script lang="ts">
	import { Guests } from '$lib/components';
	import { Calendar, Gift, Plus } from '@lucide/svelte';
	import { PUBLIC_REGISTRY_URL } from '$env/static/public';

	let guestInfo = $state([
		{ id: crypto.randomUUID(), firstName: '', lastName: '', attending: true, first: true }
	]);

	let isSubmitting = $state(false);
	let submitted = $state(true);

	const addGuest = () => {
		guestInfo.push({
			id: crypto.randomUUID(),
			firstName: '',
			lastName: '',
			attending: true,
			first: false
		});
	};

	const handleSubmit = async (e: Event) => {
		e.preventDefault();
		if (isSubmitting) return;

		isSubmitting = true;

		try {
			const response = await fetch('/rsvp', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ guests: guestInfo })
			});

			if (response.ok) {
				submitted = true;
			} else {
				const errorData = await response.json();
				alert(`Error: ${errorData.error || 'Something went wrong'}`);
				isSubmitting = false;
			}
		} catch (err) {
			console.error('Submission error:', err);
			alert('Network error. Please try again.');
			isSubmitting = false;
		}
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
	{#if !submitted}
		<form onsubmit={(e) => handleSubmit(e)} class="@container mx-7 my-8">
			{#each guestInfo as guest (guest.id)}
				<Guests initial={guest.first} bind:guestInfo id={guest.id} />
			{/each}

			<div
				class="mt-6 mb-6 flex items-center justify-between border-t border-dashed border-t-bear-medium/30 pt-6"
			>
				<p>Total Guest: {guestInfo.length}</p>
				<button
					type="button"
					class="flex items-center rounded-full border border-bear-medium/20 bg-white px-4 py-2 text-sm font-bold text-bear-dark shadow-sm transition-colors hover:text-bear-medium"
					onclick={() => addGuest()}
				>
					<Plus class="mr-2 h-5 w-5 rounded-full bg-bear-dark text-white" />
					Add Another Guest
				</button>
			</div>

			<button
				type="submit"
				disabled={isSubmitting}
				class="w-full rounded-2xl bg-bear-dark p-4 text-center text-lg font-bold text-white transition-opacity disabled:opacity-50"
			>
				{#if isSubmitting}
					Sending...
				{:else}
					Send {guestInfo.length > 1 ? 'Responses' : 'Response'}
				{/if}
			</button>
		</form>
	{:else}
		<div class="p-24">
			<h2 class="text-center text-3xl text-bear-dark">Thank You Beary Much</h2>

			<div class="mt-8 rounded-2xl border border-bear-medium/20 bg-bear-cream/30 p-4">
				<p class="text-center text-sm font-bold text-bear-dark uppercase">While you're here...</p>

				<div class="mt-6 flex flex-col space-y-3">
					<button
						class="flex w-full items-center justify-center rounded-lg border border-bear-medium/30 bg-white py-3 text-sm font-bold text-bear-dark shadow-sm transition-colors hover:bg-bear-medium hover:text-white"
					>
						<Calendar class="mr-2 text-lg" /> Add to Calendar
					</button>
					<a
						href={PUBLIC_REGISTRY_URL || 'https://target.com'}
						target="_blank"
						class="flex w-full items-center justify-center rounded-lg border border-bear-medium/30 bg-white py-3 text-sm font-bold text-bear-dark shadow-sm transition-colors hover:bg-bear-medium hover:text-white"
					>
						<Gift class="mr-2 text-lg" /> Visit Registry
					</a>
				</div>
			</div>
		</div>
	{/if}
</div>
