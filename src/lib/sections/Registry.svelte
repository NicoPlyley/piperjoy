<script lang="ts">
	import { Container } from '$lib/components';
	import { Gift } from '@lucide/svelte';
	import { PUBLIC_REGISTRY_URL } from '$env/static/public';
</script>

<div class="w-full bg-bear-cream/80 py-20">
	<Container class="text-center">
		<!-- Heading -->
		<h3>Gift Registry</h3>
		<div class="mx-auto my-4 h-1 w-24 rounded-full bg-bear-medium"></div>
		<p class="mb-12">Your presence is the most precious gift!</p>

		<!-- Card -->
		<div
			class="mx-auto flex w-full max-w-96 flex-col items-center rounded-2xl bg-white p-10 shadow-lg"
		>
			<div
				class="flex h-24 w-24 items-center justify-center rounded-full border-2 border-bear-medium bg-bear-cream"
			>
				<Gift class="h-12 w-12 text-bear-medium" />
			</div>

			<h5 class="mt-6 mb-2 text-3xl">Baby List</h5>
			<p class="mb-12">View our complete registry here</p>
			<a
				class="rounded-full bg-bear-dark px-8 py-3 font-sans font-bold text-white"
				href={PUBLIC_REGISTRY_URL || 'https://target.com'}
				target="_blank"
			>
				View Registry
			</a>
		</div>
	</Container>
</div>
