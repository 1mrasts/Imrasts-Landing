import { useState } from 'react'
import type { TTranslation } from '../../App'
import { gallery } from '../../assets/data/gallery'
import arrowNext from '../../assets/Portfolio/Gallery/arrow-next.svg'
import arrowPrev from '../../assets/Portfolio/Gallery/arrow-prev.svg'
import type { galleryInfoType } from '../../types/gallery'
import styles from './Gallery.module.scss'

export function Gallery({
	projectName,
	lang,
}: {
	projectName: 'nft' | 'payday-app' | 'todo-app' | 'sertexity'
	lang: TTranslation
}) {
	const galleryData: galleryInfoType = gallery[projectName]
	const projectLabel = {
		nft: lang.nft,
		'payday-app': lang.payday,
		'todo-app': lang.todo,
		sertexity: lang.sertexity,
	}[projectName]
	const [currentSlide, setCurrentSlide] = useState<number>(0)
	const total = galleryData.urls.length
	// Функция для перехода к предыдущему слайду (стрелка "назад")
	function prevSlide() {
		// setCurrentSlide принимает функцию, prev — это ТЕКУЩИЙ номер слайда
		// prev - 1 означает: сдвинуть на 1 слайд назад
		// Math.max(0, ...) не даёт уйти левее первого слайда (индекс 0)
		setCurrentSlide(prev => Math.max(0, prev - 1))
	}

	// Функция для перехода к следующему слайду (стрелка "вперёд")
	function nextSlide() {
		// prev + 1 — сдвинуть на 1 слайд вперёд
		// Math.min(total - 1, ...) не даёт уйти правее последнего слайда
		// total - 1 потому что индексы начинаются с 0, а total — это общее количество
		// пример: 5 картинок → total=5, последний индекс=4, значит total-1=4 ✓
		setCurrentSlide(prev => Math.min(total - 1, prev + 1))
	}

	// Стиль с CSS-transform для сдвига карусели
	// translateX сдвигает элемент по оси X (влево-вправо)
	// currentSlide — номер текущего слайда (0, 1, 2...)
	//   currentSlide=0 → translateX(0%)    — показан слайд 1
	//   currentSlide=1 → translateX(-100%)   — показан слайд 2
	//   currentSlide=2 → translateX(-200%) — показан слайд 3
	const trackStyle = {
		transform: `translateX(-${currentSlide * 100}%)`,
	}
	return (
		<div className={styles['viewport-wrapper']}>
			<div className={styles.viewport}>
				<div className={styles.track} style={trackStyle}>
					{galleryData.urls.map((item, index) => (
						<img
							loading='lazy'
							key={index}
							className={styles['track__slide']}
							src={item}
							alt={`${lang.project_screenshot}: ${projectLabel}, ${lang.screen} ${index + 1} ${lang.of} ${total}`}
						/>
					))}
				</div>
			</div>
			<div className={styles.btns}>
				<button
					className={styles['btn']}
					onClick={prevSlide}
					aria-label={lang.previous_slide}
				>
					<img loading='lazy' src={arrowPrev} alt='' />
				</button>
				<div className={`${styles.indicators}`} id='adaptive-show'>
					{galleryData.urls.map((_, index) => (
						<button
							key={index}
							id='adaptive-show'
							className={`${styles['indicator']} ${index === currentSlide ? styles['indicator--active'] : ''}`}
							onClick={() => setCurrentSlide(index)}
							aria-label={`${lang.go_to_slide} ${index + 1}`}
						/>
					))}
				</div>
				<button
					className={styles['btn']}
					onClick={nextSlide}
					aria-label={lang.next_slide}
				>
					<img loading='lazy' src={arrowNext} alt='' />
				</button>
			</div>
		</div>
	)
}
