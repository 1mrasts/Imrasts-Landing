import type { TTranslation } from '../../App'
import abstract from '../../assets/Hero/abstract.png'
import styles from './Hero.module.scss'

export function Hero({
	lang,
	typeOfLang,
}: {
	lang: TTranslation
	typeOfLang: 'ru' | 'en'
}) {
	return (
		<section className={`${styles.hero} mt-100`}>
			<h2>{lang.hi}</h2>
			<h5>
				{lang.i} <span>{lang.nickname}</span>
			</h5>
			<h2>{lang.frontend}</h2>
			<h1>{lang.developer}</h1>
			<img
				className={styles.abstract}
				src={abstract}
				alt=''
				style={{
					transform: `rotate(${typeOfLang == 'ru' ? '240deg' : '220deg'})`,
					bottom: `${typeOfLang == 'ru' ? '70px' : '100px'}`,
					right: `${typeOfLang == 'ru' ? '-50px' : '0px'}`,
				}}
			/>
		</section>
	)
}
