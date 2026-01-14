<script lang="ts">
	import { PUBLIC_LAST_NAME, PUBLIC_PARENTS_NAME } from '$env/static/public';
	import { Container } from '$lib/components';
	import bear from '$lib/assets/bear.webp';
</script>

<Container class="flex flex-col items-center pt-16 lg:pt-28">
	<!-- Bear -->
	<div
		class="mb-5 flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-4 border-bear-medium bg-white shadow-2xl"
	>
		<img src={bear} alt="Teddy bear" class="w-[90%]" />
	</div>

	<!-- Name Tag -->
	<div
		class="mb-7.5 w-full max-w-205 rotate-3 rounded-2xl border-6 border-bear-cream bg-white py-7.5 text-center shadow-2xl"
	>
		<h4 class="tracking-wide text-bear-medium uppercase">We Can bearly Wait</h4>
		<p class="text-sm tracking-wide uppercase">For the arrival of</p>
		<h1 class="my-8">Piper Joy</h1>
		<h4 class="text-bear-medium italic">
			{PUBLIC_PARENTS_NAME || 'John & Jane'}
			{PUBLIC_LAST_NAME || 'Doe'}
		</h4>
	</div>

	<!-- CTA -->
	<a
		class="rounded-full border-2 border-white bg-bear-medium px-10 py-4 font-sans text-lg font-bold text-white shadow-xl transition-transform select-none hover:-translate-y-0.5"
		href="#rsvp">RSVP Here</a
	>
</Container>
