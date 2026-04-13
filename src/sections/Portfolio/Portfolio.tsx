import type { TTranslation } from '../../App'
import nft_image from '../../assets/Portfolio/nft.png'
import nft from '../../assets/Portfolio/nft.svg'
import payday_image from '../../assets/Portfolio/payday.png'
import payday from '../../assets/Portfolio/payday.svg'
import todo_image from '../../assets/Portfolio/todo.png'
import todo from '../../assets/Portfolio/todo.svg'
import topic from '../../assets/Portfolio/topic.svg'
import styles from './Portfolio.module.scss'

export function Portfolio({ lang }: { lang: TTranslation }) {
	return (
		<section className={`${styles.portfolio} mt-100`}>
			<div className='title'>
				<img src={topic} alt='' />
				<h4>{lang.portfolio}</h4>
			</div>
			<div className={styles['portfolio__block']}>
				<div className={styles.title}>
					<img src={nft} alt='' />
					<h5>NFT-Marketplace-Landing</h5>
				</div>
				<img src={nft_image} alt='' />
			</div>
			<div className={styles['portfolio__block']}>
				<div className={styles.title}>
					<img src={payday} alt='' />
					<h5>Payday-App</h5>
				</div>
				<img src={payday_image} alt='' />
			</div>
			<div className={styles['portfolio__block']}>
				<div className={styles.title}>
					<img src={todo} alt='' />
					<h5>Todo-App-With-Redux</h5>
				</div>
				<img src={todo_image} alt='' />
			</div>
		</section>
	)
}
