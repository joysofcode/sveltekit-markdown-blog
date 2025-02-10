import type { LayoutLoadEvent } from './$types'

export const prerender = true

export async function load({ url }: LayoutLoadEvent) {
	return {
		url: url.pathname
	}
}
