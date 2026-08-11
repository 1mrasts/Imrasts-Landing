export function Head() {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebSite',
				'@id': 'https://imrasts.ru/#website',
				url: 'https://imrasts.ru/',
				name: 'Imrasts',
			},
			{
				'@type': 'ProfilePage',
				'@id': 'https://imrasts.ru/#profile',
				url: 'https://imrasts.ru/',
				name: 'Imrasts — Frontend Developer',
				mainEntity: {
					'@id': 'https://imrasts.ru/#person',
				},
			},
			{
				'@type': 'Person',
				'@id': 'https://imrasts.ru/#person',
				name: 'Imrasts',
				url: 'https://imrasts.ru/',
				jobTitle: 'Frontend Developer',
			},
		],
	}
	return (
		<>
			<link
				rel='icon'
				type='image/svg+xml'
				href={`${import.meta.env.BASE_URL}favicon.svg`}
			/>
			<meta name='robots' content='index, follow' />
			<link rel='canonical' href='https://imrasts.ru/' />
			<meta property='og:url' content='https://imrasts.ru/' />
			<meta property='og:type' content='website' />
			<meta property='og:site_name' content='Imrasts' />
			<meta property='og:locale' content='ru_RU' />
			<meta property='og:image' content='https://imrasts.ru/og-image.webp' />
			<meta property='og:image:width' content='1200' />
			<meta property='og:image:height' content='630' />
			<meta property='og:image:type' content='image/webp' />
			<meta
				property='og:image:alt'
				content='Imrasts — веб-разработчик на React и TypeScript'
			/>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>
		</>
	)
}
