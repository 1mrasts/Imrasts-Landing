export function Head() {
	return (
		<>
			<link
				rel='icon'
				type='image/svg+xml'
				href={`${import.meta.env.BASE_URL}favicon.svg`}
			/>
			<meta name='robots' content='index, follow' />
			<link rel='canonical' href='https://imrasts.ru' />
		</>
	)
}
