import type { TTranslation } from '../../App'
import nft from '../../assets/Portfolio/nft.svg'
import payday from '../../assets/Portfolio/payday.svg'
import todo from '../../assets/Portfolio/todo.svg'
import topic from '../../assets/Portfolio/topic.svg'
import { Gallery } from '../../components/Gallery/Gallery'
import styles from './Portfolio.module.scss'

export function Portfolio({ lang }: { width: number; lang: TTranslation }) {
	return (
		<div className={`${styles.portfolio} mt-100`}>
			<div>
				<div className='title'>
					<img src={topic} alt='' />
					<h4>{lang.portfolio}</h4>
				</div>
				<div id='adaptive-show' className='callout'>
					<p>{lang.phrase_portfolio}</p>
				</div>
			</div>
			<div className={`${styles['portfolio__block']} `}>
				<div className={styles.title}>
					<img src={nft} alt='' />
					<h5>NFT-Marketplace-Landing</h5>
				</div>
				<Gallery projectName='nft' />
				{/* <a href='https://github.com/1mrasts/Nft-Marketplace-Landing'>
					<img src={nft_image_big} alt='' />
				</a> */}
			</div>
			<div className={styles['portfolio__block']}>
				<div className={styles.title}>
					<img src={payday} alt='' />
					<h5>Payday-App</h5>
				</div>
				<Gallery projectName='payday-app' />
				{/* <a href='https://github.com/1mrasts/Payday-App'>
					<img src={payday_image_big} alt='' />
				</a> */}
			</div>
			<div className={styles['portfolio__block']}>
				<div className={styles.title}>
					<img src={todo} alt='' />
					<h5>Todo-App-With-Redux</h5>
				</div>
				<Gallery projectName='todo-app' />
				{/* <a href='https://github.com/1mrasts/Todo-App-with-Redux'>
					<img src={todo_image_big} alt='' />
				</a> */}
			</div>
		</div>
	)
}
