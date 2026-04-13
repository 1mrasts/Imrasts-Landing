import type { Dispatch, SetStateAction } from 'react'
import styles from './Language.module.scss'

export function Language({
	lang,
	setLang,
}: {
	lang: 'ru' | 'en'
	setLang: Dispatch<SetStateAction<'en' | 'ru'>>
}) {
	const width = window.innerWidth
	return (
		<div className={styles['language__wrapper']}>
			<div className={styles.language}>
				<div
					className={styles['language__select']}
					style={{
						transform:
							width >= 700
								? `translateX(${lang == 'ru' ? '0px' : '98px'})`
								: `translateX(${lang == 'ru' ? '0px' : '85px'})`,
					}}
				></div>
				<div
					onClick={() => setLang('ru')}
					className={styles['language__block']}
				>
					<h6>RU</h6>
				</div>
				<div
					onClick={() => setLang('en')}
					className={styles['language__block']}
				>
					<h6>EN</h6>
				</div>
			</div>
		</div>
	)
}
