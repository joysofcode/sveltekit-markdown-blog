import { writable } from 'svelte/store'
import { browser } from '$app/environment'

type Theme = 'light' | 'dark'

const userTheme = browser && localStorage.getItem('color-scheme')

export const theme = writable(userTheme ?? 'dark')

export function toggleTheme() {
	theme.update((currentTheme) => {
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark'

		document.documentElement.setAttribute('color-scheme', newTheme)
		localStorage.setItem('color-scheme', newTheme)

		return newTheme
	})
}

export function setTheme(newTheme: Theme) {
	theme.set(newTheme)
}
