import type { TTranslation } from '../../App'
import abstractBig from '../../assets/Contacts/Abstract-big.webp'
import abstract from '../../assets/Contacts/Abstract.webp'
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
							<img loading='lazy' src={contacts} alt='' />
						</div>
						<h2 className='contact-heading'>{lang.contacts}</h2>
					</div>
					<div className={styles['contacts__list']}>
						<a href='https://t.me/Imrasts' aria-label={lang.open_telegram}>
							<img loading='lazy' src={telegram} alt='' />
						</a>
						<a href='https://github.com/1mrasts' aria-label={lang.open_github}>
							<img loading='lazy' src={github} alt='' />
						</a>
						<a
							href='mailto:imrasts.mail@gmail.com?subject=Заказ'
							aria-label={lang.send_email}
						>
							<img loading='lazy' src={mailru} alt='' />
						</a>
					</div>
				</div>
				<img
					loading='lazy'
					className={styles['abstract']}
					src={width < 1100 ? abstract : abstractBig}
					alt=''
				/>
			</div>
		</div>
	)
}
