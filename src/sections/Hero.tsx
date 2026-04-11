import type { TTranslation } from '../App'

export function Hero({ lang }: { lang: TTranslation }) {
	return <section>{lang.i}</section>
}
