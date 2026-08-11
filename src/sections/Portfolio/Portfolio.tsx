import type { TTranslation } from '../../App'
import nft from '../../assets/Portfolio/nft.svg'
import payday from '../../assets/Portfolio/payday.svg'
import sertexity from '../../assets/Portfolio/sertexity.svg'
import todo from '../../assets/Portfolio/todo.svg'
import topic from '../../assets/Portfolio/topic.svg'
import { Gallery } from '../../components/Gallery/Gallery'
import styles from './Portfolio.module.scss'

export function Portfolio({ lang }: { width: number; lang: TTranslation }) {
	return (
		<div className={`${styles.portfolio} mt-100`}>
			<div className={`${styles['portfolio__block']} `}>
				<div className='title'>
					<img loading='lazy' src={topic} alt='' />
					<h2 className='section-heading'>{lang.portfolio}</h2>
				</div>
				<div id='adaptive-show' className='callout'>
					<p>{lang.phrase_portfolio}</p>
				</div>
			</div>
			<div className={`${styles['portfolio__block']} `}>
				<div className={styles.title}>
					<img loading='lazy' src={nft} alt='' />
					<h3 className={styles['project-heading']}>NFT-Marketplace-Landing</h3>
				</div>
				<Gallery projectName='nft' lang={lang} />
				{/* <a href='https://github.com/1mrasts/Nft-Marketplace-Landing'>
					<img src={nft_image_big} alt='NFT marketplace interface preview' />
				</a> */}
			</div>
			<div className={styles['portfolio__block']}>
				<div className={styles.title}>
					<img loading='lazy' src={payday} alt='' />
					<h3 className={styles['project-heading']}>Payday-App</h3>
				</div>
				<Gallery projectName='payday-app' lang={lang} />
				{/* <a href='https://github.com/1mrasts/Payday-App'>
					<img src={payday_image_big} alt='Payday work-time tracker interface preview' />
				</a> */}
			</div>
			<div className={styles['portfolio__block']}>
				<div className={styles.title}>
					<img loading='lazy' src={todo} alt='' />
					<h3 className={styles['project-heading']}>Todo-App-With-Redux</h3>
				</div>
				<Gallery projectName='todo-app' lang={lang} />
				{/* <a href='https://github.com/1mrasts/Todo-App-with-Redux'>
					<img src={todo_image_big} alt='Todo application interface preview' />
				</a> */}
			</div>
			<div className={styles['portfolio__block']}>
				<div className={styles.title}>
					<img loading='lazy' src={sertexity} alt='' />
					<h3 className={styles['project-heading']}>Sertexity site</h3>
				</div>
				<Gallery projectName='sertexity' lang={lang} />
				{/* <a href='https://github.com/1mrasts/Todo-App-with-Redux'>
					<img src={todo_image_big} alt='Todo application interface preview' />
				</a> */}
			</div>
		</div>
	)
}
