import type { TTranslation } from '../../App'
import accessibility from '../../assets/AboutMe/accessibility.svg'
import replay from '../../assets/AboutMe/replay.svg'
import settings from '../../assets/AboutMe/settings.svg'
import upload_file from '../../assets/AboutMe/upload_file.svg'
import styles from './AboutMe.module.scss'

export function AboutMe({ lang }: { lang: TTranslation }) {
	return (
		<section className={`${styles.aboutme} mt-150`}>
			<div className='title'>
				<img src={accessibility} alt='' />
				<h4>{lang.about}</h4>
			</div>
			<div className='cardlist'>
				<div className='card'>
					<div className='card-title'>
						<div className='card-logo'>
							<img src={upload_file} alt='' />
						</div>
						<h5>{lang.website_development}</h5>
					</div>
					<div className='card-hr_title'></div>
					<ul>
						<li>
							<p>{lang.wd_first}</p>
						</li>
						<li>
							<p>{lang.wd_second}</p>
						</li>
						<li>
							<p>{lang.wd_third}</p>
						</li>
						<li>
							<p>{lang.wd_fourth}</p>
						</li>
					</ul>
					<h6>{lang.frontend_experience}</h6>
					<div className='card-hr'></div>
					<ul>
						<li>
							<p>{lang.fe_first}</p>
						</li>
						<li>
							<p>{lang.fe_second}</p>
						</li>
						<li>
							<p>{lang.fe_third}</p>
						</li>
						<li>
							<p>{lang.fe_fourth}</p>
						</li>
					</ul>
				</div>
				<div className='card'>
					<div className='card-title'>
						<div className='card-logo'>
							<img src={settings} alt='' />
						</div>
						<h5>{lang.performance_and_optimization}</h5>
					</div>
					<div className='card-hr_title'></div>
					<ul>
						<li>
							<p>{lang.po_first}</p>
						</li>
						<li>
							<p>{lang.po_second}</p>
						</li>
						<li>
							<p>{lang.po_third}</p>
						</li>
						<li>
							<p>{lang.po_fourth}</p>
						</li>
					</ul>
				</div>
				<div className='card'>
					<div className='card-title'>
						<div className='card-logo'>
							<img src={replay} alt='' />
						</div>
						<h5>{lang.interactive_experience}</h5>
					</div>
					<div className='card-hr_title'></div>
					<ul>
						<li>
							<p>{lang.ie_first}</p>
						</li>
						<li>
							<p>{lang.ie_second}</p>
						</li>
						<li>
							<p>{lang.ie_third}</p>
						</li>
						<li>
							<p>{lang.ie_fourth}</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}
