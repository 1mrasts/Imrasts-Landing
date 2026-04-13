import type { TTranslation } from '../../App'
import abstract from '../../assets/Hero/abstract.png'
import abstract2 from '../../assets/Hero/developer.png'
import link from '../../assets/Hero/hi.svg'
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
			<div className={styles.title}>
				<h2>{lang.hi}</h2>
				<img src={link} alt='' />
			</div>
			<h5>
				{lang.i} <span>{lang.nickname}</span>
			</h5>
			<h2>{lang.frontend}</h2>
			<h1>{lang.developer}</h1>
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
				style={{
					transform: `rotate(${typeOfLang == 'ru' ? '240deg' : '220deg'})`,
					bottom: `${typeOfLang == 'ru' ? '70px' : '100px'}`,
					right: `${typeOfLang == 'ru' ? '-50px' : '0px'}`,
				}}
			/>
		</section>
	)
}
