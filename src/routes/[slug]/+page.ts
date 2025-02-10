import { error } from '@sveltejs/kit'
import type { PageLoadEvent } from './$types'

export async function load({ params }: PageLoadEvent) {
	try {
		const post = await import(`../../posts/${params.slug}.md`)

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch {
		error(404, `Could not find ${params.slug}`)
	}
}
