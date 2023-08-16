<script lang="ts">
	import { url } from '$lib/config.js'
	import { formatDate } from '$lib/utils'


	export let data
	
</script>

<svelte:head>
	<title>{data.meta.title} | {"PPC Panos"} </title>
	<meta name="title" content={data.meta.title} />
	<meta name="description" content={data.meta.description} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:site_name" content="PPC Panos" />
	<meta property="og:image" content={data.meta.banner} />

	<meta property="twitter:title" content={data.meta.title} />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:description" content={data.meta.description} />
	<meta property="twitter:site_name" content="PPC Panos" />
	<meta property="twitter:image" content={data.meta.banner} />

	<link rel="canonical" href={url}{data.url} />



    
</svelte:head>

<article>
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<div class="tags">
		{#each data.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>

	<div class="image">
		<img src={data.meta.banner} title={data.meta.title} alt={data.meta.title} />
	</div>

	<div class="prose">
		<svelte:component this={data.content} />
	</div>


</article>

<style>
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
	}

	h1 {
		text-transform: capitalize;
	}

	h1 + p {
		margin-top: var(--size-2);
		color: var(--text-2);
	}

	.image {
		padding-top: 2%;
		padding-bottom: 2%;
	}

	.tags {
		display: flex;
		gap: var(--size-3);
		margin-top: var(--size-7);
	}

	.tags > * {
		padding: var(--size-2) var(--size-3);
		border-radius: var(--radius-round);
	}
</style>
