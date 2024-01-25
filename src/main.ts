const setTheme = (theme: string) => {
	localStorage.setItem('theme', theme)
	document.documentElement.setAttribute('data-theme', theme)
}

window.onload = () => {
	const theme = localStorage.getItem('theme')
	const themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

	if (theme) setTheme(theme)
	else {
		if (themeMediaQuery.matches) setTheme('dark')
		else setTheme('light')
	}

	themeMediaQuery.addEventListener('change', (e) => {
		const newColorScheme = e.matches ? 'dark' : 'light'
		setTheme(newColorScheme)
	})
}

const themeToggle = document.querySelector('.theme-toggle') as HTMLButtonElement

themeToggle.addEventListener('click', () => {
	const currentTheme = localStorage.getItem('theme')
	if (currentTheme === 'light') setTheme('dark')
	else setTheme('light')
})
