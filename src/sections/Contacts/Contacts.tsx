import type { TTranslation } from '../../App'
import abstact from '../../assets/Contacts/Abstract.png'
import contacts from '../../assets/Contacts/contacts.svg'
import github from '../../assets/Contacts/github.svg'
import mailru from '../../assets/Contacts/mailru.svg'
import telegram from '../../assets/Contacts/telegram.svg'
import styles from './Contacts.module.scss'

export function Contacts({ lang }: { lang: TTranslation }) {
	return (
		<section className={`${styles.contacts} mt-150`}>
			<div className={styles['abstract__wrapper']}>
				<div className='card card-horiz'>
					<div className='card-title'>
						<div className='card-logo'>
							<img src={contacts} alt='' />
						</div>
						<h5>{lang.contacts}</h5>
					</div>
					<div className={styles['contacts__list']}>
						<a href='https://t.me/l0ne1ys'>
							<img src={telegram} alt='' />
						</a>
						<a href='https://github.com/1mrasts'>
							<img src={github} alt='' />
						</a>
						<a href='mailto:imrasts.mail@gmail.com?subject=Заказ'>
							<img src={mailru} alt='' />
						</a>
					</div>
				</div>
				<img className={styles['abstract']} src={abstact} alt='' />
			</div>
		</section>
	)
}
