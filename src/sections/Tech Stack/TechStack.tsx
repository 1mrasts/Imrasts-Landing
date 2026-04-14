import type { TTranslation } from '../../App'
import engineering from '../../assets/TechStack/engineering.svg'
import tools from '../../assets/TechStack/tools.svg'
import web from '../../assets/TechStack/web.svg'
import styles from './TechStack.module.scss'

export function TechStack({ lang }: { lang: TTranslation }) {
	return (
		<div className={`${styles.techstack}`}>
			<div className='title'>
				<img src={engineering} alt='' />
				<h4>{lang.tech_stack}</h4>
			</div>
			<div id='adaptive-show' className='callout'>
				<p>{lang.phrase_tech_stack}</p>
			</div>
			<div className='cardlist'>
				<div className='card'>
					<div className='card-title'>
						<div className='card-logo'>
							<img src={web} alt='' />
						</div>
						<h5>{lang.interfaces}</h5>
					</div>
					<div className='card-hr_title'></div>
					<ul>
						<li>
							<p>{lang.i_first}</p>
						</li>
						<li>
							<p>{lang.i_second}</p>
						</li>
						<li>
							<p>{lang.i_third}</p>
						</li>
						<li>
							<p>{lang.i_fourth}</p>
						</li>
					</ul>
				</div>
				<div className='card'>
					<div className='card-title'>
						<div className='card-logo'>
							<img src={tools} alt='' />
						</div>
						<h5>{lang.tools}</h5>
					</div>
					<div className='card-hr_title'></div>
					<ul>
						<li>
							<p>{lang.t_first}</p>
						</li>
						<li>
							<p>{lang.t_second}</p>
						</li>
						<li>
							<p>{lang.t_third}</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
