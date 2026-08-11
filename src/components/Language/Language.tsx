import type { Dispatch, SetStateAction } from 'react'
import styles from './Language.module.scss'

export function Language({
	lang,
	setLang,
	width,
}: {
	lang: 'ru' | 'en'
	setLang: Dispatch<SetStateAction<'en' | 'ru'>>
	width: number
}) {
	return (
		<div className={styles['language__container']}>
			<div className={styles.language}>
				<div
					className={styles['language__slider']}
					style={{
						transform:
							width >= 1000
								? `translateX(${lang == 'ru' ? '0px' : '98px'})`
								: `translateX(${lang == 'ru' ? '0px' : '85px'})`,
					}}
				></div>
				<div
					onClick={() => setLang('ru')}
					className={styles['language__option']}
				>
					<span className={styles['language__label']}>RU</span>
				</div>
				<div
					onClick={() => setLang('en')}
					className={styles['language__option']}
				>
					<span className={styles['language__label']}>EN</span>
				</div>
			</div>
		</div>
	)
}
