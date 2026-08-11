import type { galleryType } from '../../types/gallery'
import nftScreen1 from '../Portfolio/Gallery/NFT/screen1.webp'
import nftScreen2 from '../Portfolio/Gallery/NFT/screen2.webp'
import nftScreen3 from '../Portfolio/Gallery/NFT/screen3.webp'
import nftScreen4 from '../Portfolio/Gallery/NFT/screen4.webp'
import nftScreen5 from '../Portfolio/Gallery/NFT/screen5.webp'

import paydayScreen1 from '../Portfolio/Gallery/Payday-app/screen1.webp'
import paydayScreen2 from '../Portfolio/Gallery/Payday-app/screen2.webp'
import paydayScreen3 from '../Portfolio/Gallery/Payday-app/screen3.webp'
import paydayScreen4 from '../Portfolio/Gallery/Payday-app/screen4.webp'

import todoScreen1 from '../Portfolio/Gallery/Todo/screen1.webp'
import todoScreen2 from '../Portfolio/Gallery/Todo/screen2.webp'
import todoScreen3 from '../Portfolio/Gallery/Todo/screen3.webp'
import todoScreen4 from '../Portfolio/Gallery/Todo/screen4.webp'
import todoScreen5 from '../Portfolio/Gallery/Todo/screen5.webp'

import sertexityScreen1 from '../Portfolio/Gallery/Sertexity/screen1.webp'
import sertexityScreen2 from '../Portfolio/Gallery/Sertexity/screen2.webp'
import sertexityScreen3 from '../Portfolio/Gallery/Sertexity/screen3.webp'
import sertexityScreen4 from '../Portfolio/Gallery/Sertexity/screen4.webp'
import sertexityScreen5 from '../Portfolio/Gallery/Sertexity/screen5.webp'

export const gallery: galleryType = {
	nft: {
		name: 'NFT-Marketplace-Landing',
		urls: [nftScreen1, nftScreen2, nftScreen3, nftScreen4, nftScreen5],
	},
	'payday-app': {
		name: 'Payday-App',
		urls: [paydayScreen1, paydayScreen2, paydayScreen3, paydayScreen4],
	},
	'todo-app': {
		name: 'Todo-App-With-Redux',
		urls: [todoScreen1, todoScreen2, todoScreen3, todoScreen4, todoScreen5],
	},
	sertexity: {
		name: 'Sertexity site',
		urls: [
			sertexityScreen1,
			sertexityScreen2,
			sertexityScreen3,
			sertexityScreen4,
			sertexityScreen5,
		],
	},
}
