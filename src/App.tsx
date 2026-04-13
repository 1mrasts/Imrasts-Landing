import { useState } from 'react'
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

	return (
		<>
			<Language lang={lang} setLang={setLang} />
			<Hero lang={translations[lang]} typeOfLang={lang} />
			<AboutMe lang={translations[lang]} />
			<img className='abstract' src={abstract} alt='' />
			<TechStack lang={translations[lang]} />
			<Portfolio lang={translations[lang]} />
			<Contacts lang={translations[lang]} />
		</>
	)
}

export default App
