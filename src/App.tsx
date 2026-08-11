import { useEffect, useRef, useState } from 'react'
import abstractBig from './assets/abstract-1-big.webp'
import abstract from './assets/abstract-1.webp'
import en from './assets/data/en.json'
import ru from './assets/data/ru.json'
import { Language } from './components/Language/Language'
import { AboutMe } from './sections/AboutMe/AboutMe'
import { Contacts } from './sections/Contacts/Contacts'
import { Hero } from './sections/Hero/Hero'
import { Message } from './sections/Message/Message'
import { Portfolio } from './sections/Portfolio/Portfolio'
import { TechStack } from './sections/Tech Stack/TechStack'
import './styles/styles.scss'

export type TTranslation = typeof en
function App() {
	const translations = {
		en,
		ru,
	}
	const [lang, setLang] = useState<'en' | 'ru'>('ru')

	const [width, setWidth] = useState<number>(1440)
	const observer = useRef<IntersectionObserver | null>(null) // Постоянно держим observer

	useEffect(() => {
		const updateWidth = () => setWidth(window.innerWidth)

		updateWidth()
		window.addEventListener('resize', updateWidth)

		return () => window.removeEventListener('resize', updateWidth)
	}, [])

	// Следим за элементами с классом .observe и добавляем им .visible при появлении на экране
	useEffect(() => {
		// Создаём IntersectionObserver — он отслеживает появление элементов в области просмотра
		observer.current = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible') // Когда элемент появляется — добавляем ему класс visible
						observer.current?.unobserve(entry.target) // После срабатывания отключаем наблюдение за этим элементом
					}
				})
			},
			{ threshold: 0.3 }, // Элемент считается видимым, когда хотя бы 30% его площади на экране
		)

		// Находим все элементы с классом .observe и подписываем их на наблюдение
		document.querySelectorAll('.observe').forEach(el => {
			observer.current?.observe(el)
		})

		return () => {
			observer.current?.disconnect() // При размонтировании компонента отключаем observer, чтобы не было утечек памяти
		}
	}, [])

	return (
		<main>
			<Language width={width} lang={lang} setLang={setLang} />
			<header className='observe'>
				<Hero width={width} lang={translations[lang]} typeOfLang={lang} />
			</header>
			<section className='observe'>
				<AboutMe lang={translations[lang]} />
			</section>
			<section className='observe'>
				<img
					loading='lazy'
					className='abstract'
					src={width < 1100 ? abstract : abstractBig}
					alt=''
				/>
			</section>
			<section className='observe'>
				<TechStack lang={translations[lang]} />
			</section>
			<section>
				<Portfolio width={width} lang={translations[lang]} />
			</section>
			<section className='observe'>
				<Message lang={translations[lang]} />
			</section>
			<footer className='observe'>
				<Contacts width={width} lang={translations[lang]} />
			</footer>
		</main>
	)
}

export default App
