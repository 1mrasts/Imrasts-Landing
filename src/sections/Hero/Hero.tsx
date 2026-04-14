import type { TTranslation } from '../../App'
import abstract from '../../assets/Hero/abstract.png'
import abstract2 from '../../assets/Hero/developer.png'
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
					right: `${typeOfLang == 'ru' && width < 1000 ? '-50px' : '0px'}`,
				}}
			/>
		</div>
	)
}
