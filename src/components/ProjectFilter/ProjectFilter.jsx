import { FILTER_TABS } from '@/constants/filterTabs'
import classNames from 'classnames'
import './ProjectFilter.scss'

const ProjectFilter = props => {
	const { activeCategory = 'all' } = props

	return (
		<div
			class='project-filter'
			data-js-filter
		>
			<ul class='project-filter__list'>
				{FILTER_TABS.map(tab => (
					<li
						class='project-filter__item'
						key={tab.category}
					>
						<button
							class={classNames('project-filter__btn', {
								'project-filter__btn--active': tab.category === activeCategory
							})}
							data-js-filter-btn
							data-category={tab.category}
							type='button'
						>
							{tab.label}{' '}
							<span class='project-filter__count'>({tab.count})</span>
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export { ProjectFilter }
