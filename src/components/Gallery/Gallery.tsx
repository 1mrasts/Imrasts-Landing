import { useState } from 'react'
import { gallery } from '../../assets/data/gallery'
import arrowNext from '../../assets/Portfolio/Gallery/arrow-next.svg'
import arrowPrev from '../../assets/Portfolio/Gallery/arrow-prev.svg'
import type { galleryInfoType } from '../../types/gallery'
import styles from './Gallery.module.scss'

export function Gallery({
	projectName,
}: {
	projectName: 'nft' | 'payday-app' | 'todo-app'
}) {
	const galleryData: galleryInfoType = gallery[projectName]
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
						<img key={index} className={styles['track__slide']} src={item} />
					))}
				</div>
			</div>
			<div className={styles.btns}>
				<button className={styles['btn']} onClick={prevSlide}>
					<img src={arrowPrev} />
				</button>
				<div className={`${styles.indicators}`} id='adaptive-show'>
					{galleryData.urls.map((_, index) => (
						<button
							key={index}
							id='adaptive-show'
							className={`${styles['indicator']} ${index === currentSlide ? styles['indicator--active'] : ''}`}
							onClick={() => setCurrentSlide(index)}
						/>
					))}
				</div>
				<button className={styles['btn']} onClick={nextSlide}>
					<img src={arrowNext} />
				</button>
			</div>
		</div>
	)
}
