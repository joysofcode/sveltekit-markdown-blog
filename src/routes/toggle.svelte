<script lang="ts">
	import { fly } from 'svelte/transition'
	import { Moon, Sun } from 'lucide-svelte'
	import { theme } from '$lib/theme.svelte'
</script>

<button on:click={theme.toggle} aria-label="Toggle theme">
	{#if theme.current === 'dark'}
		<div in:fly={{ y: 10 }}>
			<Sun />
			<span>Light</span>
		</div>
	{:else}
		<div in:fly={{ y: -10 }}>
			<Moon />
			<span>Dark</span>
		</div>
	{/if}
</button>

<style>
	button {
		padding: 0;
		font-weight: inherit;
		background: none;
		border: none;
		box-shadow: none;
		overflow: hidden;

		> * {
			display: flex;
			gap: var(--size-2);
		}
	}
</style>
