import { useState } from 'react'
import en from './assets/en.json'
import ru from './assets/ru.json'
import { Language } from './components/Language'
import { Hero } from './sections/Hero'
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
		</>
	)
}

export default App
