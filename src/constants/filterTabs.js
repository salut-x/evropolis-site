// @/constants/filterTabs.js
import { PROJECTS } from '@/constants/projectsData'

export const FILTER_TABS = [
	{ category: 'all', label: 'Все проекты' },
	{ category: 'individual', label: 'Индивидуальные' },
	{ category: 'typical', label: 'Типовые' }
].map(tab => ({
	...tab,
	count:
		tab.category === 'all'
			? PROJECTS.length
			: PROJECTS.filter(p => p.categoryKey === tab.category).length
}))
