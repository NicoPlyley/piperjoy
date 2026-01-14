<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		icon: Snippet;
		children: Snippet;
		isAnimated?: boolean;
	}

	const { icon, children, isAnimated = false }: Props = $props();
</script>

<div
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
	<div
		class="flex h-16 w-16 items-center justify-center rounded-full border-2 border-bear-medium bg-bear-cream text-bear-dark"
	>
		{@render icon()}
	</div>

	{@render children()}
</div>
