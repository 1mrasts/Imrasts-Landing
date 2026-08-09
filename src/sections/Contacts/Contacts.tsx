import type { TTranslation } from '../../App'
import abstractBig from '../../assets/Contacts/Abstract-big.png'
import abstract from '../../assets/Contacts/Abstract.png'
import contacts from '../../assets/Contacts/contacts.svg'
import github from '../../assets/Contacts/github.svg'
import mailru from '../../assets/Contacts/mailru.svg'
import telegram from '../../assets/Contacts/telegram.svg'
import styles from './Contacts.module.scss'

export function Contacts({
	width,
	lang,
}: {
	width: number
	lang: TTranslation
}) {
	return (
		<div className={`${styles.contacts} mt-250 mb-200`}>
			<div className={styles['abstract__wrapper']}>
				<div className='card card-horiz'>
					<div className='card-title'>
						<div className='card-logo'>
							<img src={contacts} alt='Mobile contact icon' />
						</div>
						<h5>{lang.contacts}</h5>
					</div>
					<div className={styles['contacts__list']}>
						<a href='https://t.me/Imrasts'>
							<img src={telegram} alt='Telegram logo' />
						</a>
						<a href='https://github.com/1mrasts'>
							<img src={github} alt='GitHub logo' />
						</a>
						<a href='mailto:imrasts.mail@gmail.com?subject=Заказ'>
							<img src={mailru} alt='Email icon' />
						</a>
					</div>
				</div>
				<img
					className={styles['abstract']}
					src={width < 1100 ? abstract : abstractBig}
					alt='Abstract composition of blue and dark circles'
				/>
			</div>
		</div>
	)
}
