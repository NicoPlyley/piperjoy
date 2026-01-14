<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Gift, Ticket } from '@lucide/svelte';

	interface Props {
		icon: Snippet;
		children: Snippet;
		isAnimated?: boolean;
	}

	let modalOpen = $state(false);

	const { icon, children, isAnimated = false }: Props = $props();

	const handleClick = (animated: boolean) => {
		if (animated) {
			modalOpen = true;
		}
	};

	const closeModal = () => {
		modalOpen = false;
	};
</script>

{#if modalOpen && isAnimated}
	<div
		class="fixed inset-0 z-20 flex h-screen w-screen items-center justify-center bg-bear-dark/60 p-4 backdrop-blur-xs"
	>
		<div class="relative w-full max-w-125 overflow-hidden rounded-2xl bg-white">
			<div class="flex flex-col items-center p-8">
				{@render icon()}
				<h5 class="mt-4 mb-2">Diaper Raffle Details</h5>
				<p>A pack of diapers</p>
				<div class="mt-8 w-full space-y-4 border border-bear-tan bg-bear-cream/50 p-4">
					<div class="flex">
						<Ticket />
						<span class="pl-1 font-semibold">Entry: &nbsp;</span>
						<p>Information about the entry</p>
					</div>

					<div class="flex">
						<Gift />
						<span class="pl-1 font-semibold">Prize: &nbsp;</span>
						<p>Information about the prize</p>
					</div>
				</div>
			</div>

			<div
				class="flex w-full justify-end border-t border-bear-medium/30 bg-bear-cream/30 px-8 py-4"
			>
				<button
					onclick={closeModal}
					class="cursor-pointer rounded-full border border-bear-medium px-6 py-2 text-bear-dark"
					>Got It!</button
				>
			</div>
		</div>
	</div>
{/if}

<div
	onclick={() => handleClick(isAnimated)}
	role="none"
	class="relative flex w-full flex-col items-center rounded-2xl border-b-8 border-b-bear-medium bg-white py-8 shadow-lg {isAnimated &&
		'cursor-pointer'}"
>
	{#if isAnimated}
		<div
			class="absolute -top-5 right-0 animate-bounce rounded-full border-2 border-white bg-bear-dark px-4 py-2 font-semibold text-white shadow-md select-none"
		>
			Click Me!
		</div>
	{/if}

	{@render icon()}

	{@render children()}
</div>
