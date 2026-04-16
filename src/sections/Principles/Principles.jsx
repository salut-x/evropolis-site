import { PrincipleCard } from '@/components/PrincipalCard/index.js'
import { PRINCIPLES } from '@/constants/principles'
import './Principles.scss'

const Principles = () => {
	return (
		<section className='principles section'>
			<div className='principles__inner container'>
				<div className='principles__wrapper'>
					<div className='section__header section__header--sticky principles__header'>
						<h2 className='section__title'>
							<span>(4)</span> НАШИ ЦЕННОСТИ
						</h2>
						<p className='section__subtitle'>
							<span className='reveal'>
								<span className='reveal__inner'>ПРИНЦИПЫ, </span>
							</span>
							<span className='reveal'>
								<span className='reveal__inner'>КОТОРЫМ, </span>
							</span>
							<span className='reveal'>
								<span className='reveal__inner'>МЫ СЛЕДУЕМ</span>
							</span>
						</p>
					</div>
					<div className='section__body'>
						<div className='principles__list'>
							{PRINCIPLES.map(item => (
								<PrincipleCard
									key={item.number}
									title={item.title}
									number={item.number}
									description={item.description}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Principles
