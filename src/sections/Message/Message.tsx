import { useEffect, useState } from 'react'
import type { TTranslation } from '../../App'
import send from '../../assets/Message/send.svg'
import styles from './Message.module.scss'

export function Message({ lang }: { lang: TTranslation }) {
	const [message, setMessage] = useState<string>('')
	const [isSend, setIsSend] = useState<boolean>(false)
	const textMessage = lang.message

	useEffect(() => {
		let i = 0
		let intervalId: ReturnType<typeof setInterval>
		let timeoutId: ReturnType<typeof setTimeout>

		const startTyping = () => {
			setMessage('')
			setIsSend(false)
			i = 0

			intervalId = setInterval(() => {
				i++
				setMessage(textMessage.slice(0, i))

				if (i >= textMessage.length) {
					clearInterval(intervalId)
					setMessage('')
					setIsSend(true)
					timeoutId = setTimeout(() => {
						startTyping()
					}, 2000)
				}
			}, 100)
		}

		startTyping()

		return () => {
			clearInterval(intervalId)
			clearTimeout(timeoutId)
		}
	}, [textMessage])
	return (
		<article className={`${styles.chat} mt-150`}>
			<div className={`${styles['chat__block']} card`}>
				<div
					className={
						isSend
							? `visible ${styles['chat__body']}`
							: `hide ${styles['chat__body']}`
					}
				>
					<div className={`${styles['chat__avatar']}`}></div>
					<span>{textMessage}</span>
				</div>
				<div className={`${styles['chat__input-wrapper']}`}>
					<div className={`${styles['chat__input']}`}>
						<p>{message}</p>
					</div>
					<div
						onClick={() => window.open('https://t.me/Imrasts', '_blank')}
						className={`${styles['chat__button']}`}
					>
						<img loading='lazy' src={send} alt={lang.send_telegram} />
					</div>
				</div>
			</div>
		</article>
	)
}
