import { AboutCompany } from '@/sections/AboutCompany'
import { CTA } from '@/sections/CTA'
import { History } from '@/sections/History'
import { Mission } from '@/sections/Mission'
import Principles from '@/sections/Principles/Principles'
import { Team } from '@/sections/Team'

export const metadata = {
	title: 'О нас',
	headerTheme: 'light'
}

export default function () {
	return (
		<>
			<AboutCompany />
			<History />
      <Team />
      <Mission />
      <Principles />
      <CTA />
		</>
	)
}
