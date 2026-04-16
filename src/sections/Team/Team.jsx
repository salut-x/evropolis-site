import { MemberCard } from '@/components/MemberCard'
import { TEAM } from '@/constants/team'
import './Team.scss'

const Team = () => {
	return (
		<section className='team section'>
			<div className='team__inner container'>
				<header className='section__header section__header--centered'>
					<h2 className='section__title'>
						<span>(2)</span> КОМАНДА
					</h2>
					<p className='section__subtitle'>
						<span className='reveal'>
							<span className='reveal__inner'>КЛЮЧЕВЫЕ СОТРУДНИКИ</span>
						</span>
					</p>
				</header>
				<div className='section__body'>
					<div className='team__grid' data-js-team>
						{TEAM.map(item => (
							<MemberCard
								srcImg={item.srcImg}
								role={item.role}
								name={item.name}
								data-js-team-card
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Team
