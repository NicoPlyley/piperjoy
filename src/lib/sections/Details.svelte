<script lang="ts">
	import { Baby, Calendar, MapPin } from '@lucide/svelte';
	import { PUBLIC_LAST_NAME } from '$env/static/public';
	import { Card, Container } from '$lib/components';

	const details = [
		{
			id: 1,
			icon: Calendar,
			title: 'When',
			subtitle: 'Saturday, February 28',
			info: '2:00 - 5:00 PM',
			link: {
				title: 'Add To Calendar',
				href: '#'
			}
		},
		{
			id: 2,
			icon: MapPin,
			title: 'Where',
			subtitle: `The ${PUBLIC_LAST_NAME} Home`,
			info: 'Address',
			link: {
				title: 'Get Directions',
				href: '#'
			}
		},
		{
			id: 3,
			icon: Baby,
			title: 'Diaper Raffle',
			subtitle: 'Enter To Win',
			info: 'Bring a pack of Diapers',
			link: {
				title: 'View Details',
				href: '#'
			}
		}
	];
</script>

<Container class="my-20">
	<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
		{#each details as item (item.id)}
			<Card isAnimated={item.id === 3}>
				{#snippet icon()}
					<item.icon />
				{/snippet}

				<div class="text-center">
					<h5 class="mt-4">{item.title}</h5>
					<p class="mt-2 text-lg font-semibold text-bear-medium">{item.subtitle}</p>
					<p class="text-gray-600">{item.info}</p>
					<a class="mt-4 block font-bold text-bear-dark underline" href={item.link.href}
						>{item.link.title}</a
					>
				</div>
			</Card>
		{/each}
	</div>
</Container>
