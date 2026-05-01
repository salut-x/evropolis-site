import { AboutCompany } from '@/sections/AboutCompany'
import { CTA } from '@/sections/CTA'
import { FullTeam } from '@/sections/FullTeam'
import { History } from '@/sections/History'
import Principles from '@/sections/Principles/Principles'
import { Team } from '@/sections/Team'
import { TeamGallery } from '@/sections/TeamGallery'
import { VideoModal } from '@/components/VideoModal'

export const metadata = {
	title: 'О нас',
	headerTheme: 'light'
}

export default function () {
	return (
		<>
			<AboutCompany />
			<VideoModal />
			<History />
			<TeamGallery />
			<Team />
			<FullTeam />
			<Principles />
			<CTA />
		</>
	)
}
