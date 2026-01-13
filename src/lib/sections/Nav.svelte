<script lang="ts">
	import { Hamburger } from 'svelte-hamburgers';
	import { slide } from 'svelte/transition';

	let mobileMenuOpened = false;
</script>

<header
	class="absolute top-0 w-full border-b-4 border-b-bear-medium bg-white px-4 shadow sm:px-6 lg:px-8"
>
	<div class="@container m-auto flex h-20 max-w-7xl items-center justify-between select-none">
		<h3>Piper Joy</h3>

		<!-- Links -->
		<div class="@lg:hidden">
			<Hamburger
				--color="#9f8272"
				open={mobileMenuOpened}
				onclick={() => (mobileMenuOpened = !mobileMenuOpened)}
				type="elastic"
			/>
		</div>
		{#if mobileMenuOpened}
			<nav transition:slide class="absolute top-21 left-0 w-full bg-white px-4 shadow @lg:hidden">
				<ul class="flex flex-col">
					<li>
						<a
							onclick={() => (mobileMenuOpened = false)}
							class="block w-full border-b border-b-bear-medium py-14 text-center"
							href="#details">Details</a
						>
					</li>
					<li>
						<a
							onclick={() => (mobileMenuOpened = false)}
							class="block w-full border-b border-b-bear-medium py-14 text-center"
							href="#registry">Registry</a
						>
					</li>
					<li>
						<a
							onclick={() => (mobileMenuOpened = false)}
							class="block w-full py-14 text-center"
							href="#rvsp">RSVP</a
						>
					</li>
				</ul>
			</nav>
		{/if}
		<nav class="hidden @lg:block">
			<nav class="hidden @lg:block">
				<ul class="flex gap-14">
					<li><a href="#details">Details</a></li>
					<li><a href="#registry">Registry</a></li>
					<li><a class="rounded-full bg-bear-dark px-6 py-2 text-white" href="#rvsp">RSVP</a></li>
				</ul>
			</nav>
		</nav>
	</div>
</header>
