import { useEffect, useRef, useState } from 'react'
import abstractBig from './assets/abstract-1-big.png'
import abstract from './assets/abstract-1.png'
import en from './assets/en.json'
import ru from './assets/ru.json'
import { Language } from './components/Language'
import { AboutMe } from './sections/AboutMe/AboutMe'
import { Contacts } from './sections/Contacts/Contacts'
import { Hero } from './sections/Hero/Hero'
import { Portfolio } from './sections/Portfolio/Portfolio'
import { TechStack } from './sections/Tech Stack/TechStack'
import './styles/styles.scss'

export type TTranslation = typeof en
function App() {
	const translations = {
		en,
		ru,
	}
	const [lang, setLang] = useState<'en' | 'ru'>('en')

	const [width, setWidth] = useState(window.innerWidth)
	const observer = useRef<IntersectionObserver | null>(null) // Постоянно держим observer

	// Следим за элементами
	useEffect(() => {
		observer.current = new IntersectionObserver(
			entry => {
				entry.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible') // Добавляем элементу в диапазоне видимости класс
						observer.current?.unobserve(entry.target) // отключаем наблюдение за текущим элементом
					}
				})
			},
			{ threshold: 0.4 }, // 40% от объекта должно быть на экране
		)

		// Находим все .observe элементы и к каждому навешиваем слежку
		document.querySelectorAll('.observe').forEach(el => {
			observer.current?.observe(el)
		})

		return () => {
			observer.current?.disconnect() // Очень важно сделать
		}
	}, [])

	// Обновление ширины экрана (SSR)
	useEffect(() => {
		const handler = () => setWidth(window.innerWidth) // Функция для обновления параметра ширины экрана
		window.addEventListener('resize', handler) // Навешиваем resize на весь window и обновляем ширину экрана
		return () => window.removeEventListener('resize', handler)
	})

	return (
		<>
			<Language width={width} lang={lang} setLang={setLang} />
			<section className='observe'>
				<Hero width={width} lang={translations[lang]} typeOfLang={lang} />
			</section>
			<section className='observe'>
				<AboutMe lang={translations[lang]} />
			</section>
			<section className='observe'>
				<img
					className='abstract'
					src={width < 1100 ? abstract : abstractBig}
					alt=''
				/>
			</section>
			<section className='observe'>
				<TechStack lang={translations[lang]} />
			</section>
			<section className='observe'>
				<Portfolio width={width} lang={translations[lang]} />
			</section>
			<section className='observe'>
				<Contacts width={width} lang={translations[lang]} />
			</section>
		</>
	)
}

export default App
