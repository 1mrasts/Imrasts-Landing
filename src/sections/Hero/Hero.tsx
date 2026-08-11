import type { TTranslation } from '../../App'
import abstract from '../../assets/Hero/abstract.webp'
import abstract2 from '../../assets/Hero/developer.webp'
import link from '../../assets/Hero/hi.svg'
import styles from './Hero.module.scss'

export function Hero({
	lang,
	typeOfLang,
	width,
}: {
	lang: TTranslation
	typeOfLang: 'ru' | 'en'
	width: number
}) {
	return (
		<div className={`${styles.hero} mt-150`}>
			<div className={styles.title}>
				<p className={styles.greeting}>{lang.hi}</p>
				<img src={link} alt='' />
			</div>
			<p className={styles.intro}>
				{lang.i} <span>{lang.nickname}</span>
			</p>
			<h1 className={styles.headline}>
				<span className={styles['headline__context']}>{lang.frontend}</span>
				<span className={styles['headline__primary']}>{lang.developer}</span>
			</h1>
			<img
				className={styles.developer}
				id='adaptive-show'
				src={abstract2}
				alt=''
			/>
			<img
				className={styles.abstract}
				src={abstract}
				alt=''
				fetchPriority='high'
				style={{
					transform: `rotate(${typeOfLang == 'ru' ? '240deg' : '220deg'})`,
					bottom: `${typeOfLang == 'ru' ? '70px' : '100px'}`,
					right: `${typeOfLang == 'ru' && width < 1000 ? '-50px' : '0px'}`,
				}}
			/>
		</div>
	)
}
