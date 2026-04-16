import { HistoryCard } from '@/components/HistoryCard'
import { HISTORY_DATA } from '@/constants/historyData'
import './History.scss'

const History = () => {
	return (
		<section className='history section'>
			<div className='history__inner container'>
				<header className='section__header'>
					<h2 className='section__title'>
						<span>(1)</span>ИСТОРИЯ
					</h2>
					<p className='section__subtitle'>
						<span className='reveal'>
							<span className='reveal__inner'>15 лет в строительстве</span>
						</span>
						<span className='reveal'>
							<span className='reveal__inner'>и ремонтах</span>
						</span>
					</p>
				</header>
				<div className='section__body'>
					<div
						className='history__slider'
						data-js-history
					>
						<div className='history__list'>
							{HISTORY_DATA.map((item, i) => (
								<div
									className='history__item'
									data-js-history-card
									key={item.id}
								>
									<HistoryCard
										title={item.title}
										description={item.description}
										years={item.years}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default History
