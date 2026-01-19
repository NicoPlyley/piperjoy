<script lang="ts">
	import { PUBLIC_LAST_NAME } from '$env/static/public';
	import { Container } from '$lib/components';
	import { PawPrint, Heart, Panda } from '@lucide/svelte';
</script>

<footer class="w-full border-t-8 border-t-bear-medium bg-white py-14">
	<Container class="text-center">
		<div class="flex items-center justify-center gap-4">
			<PawPrint class="rotate-270 fill-bear-dark/65" strokeWidth="0" />
			<Panda class="h-10 w-10 fill-bear-dark/65" strokeWidth="0" />
			<PawPrint class="fill-bear-dark/65" strokeWidth="0" />
		</div>
		<h2 class="mt-6 mb-4 text-4xl text-bear-medium">Piper Joy {PUBLIC_LAST_NAME || 'Doe'}</h2>
		<p class="flex items-center justify-center">
			Made with <Heart class="mx-2 h-4 w-4 fill-bear-dark/65" strokeWidth="0" /> by &nbsp;
			<a class="underline" target="_blank" href="https://phoenixtechlab.com">Phoenix Tech Lab</a>
		</p>
	</Container>
</footer>
