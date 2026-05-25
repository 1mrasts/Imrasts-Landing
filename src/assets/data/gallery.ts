import type { galleryType } from '../../types/gallery'
import nftScreen1 from '../Portfolio/Gallery/NFT/screen1.png'
import nftScreen2 from '../Portfolio/Gallery/NFT/screen2.png'
import nftScreen3 from '../Portfolio/Gallery/NFT/screen3.png'
import nftScreen4 from '../Portfolio/Gallery/NFT/screen4.png'
import nftScreen5 from '../Portfolio/Gallery/NFT/screen5.png'

import paydayScreen1 from '../Portfolio/Gallery/Payday-app/screen1.png'
import paydayScreen2 from '../Portfolio/Gallery/Payday-app/screen2.png'
import paydayScreen3 from '../Portfolio/Gallery/Payday-app/screen3.png'
import paydayScreen4 from '../Portfolio/Gallery/Payday-app/screen4.png'

import todoScreen1 from '../Portfolio/Gallery/Todo/screen1.png'
import todoScreen2 from '../Portfolio/Gallery/Todo/screen2.png'
import todoScreen3 from '../Portfolio/Gallery/Todo/screen3.png'
import todoScreen4 from '../Portfolio/Gallery/Todo/screen4.png'
import todoScreen5 from '../Portfolio/Gallery/Todo/screen5.png'

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
}
