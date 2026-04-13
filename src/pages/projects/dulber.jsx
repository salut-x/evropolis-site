import { VideoModal } from '@/components/VideoModal'
import { PROJECTS } from '@/constants/projectsData'
import { ProjectGallery } from '@/sections/ProjectGallery'
import { ProjectHero } from '@/sections/ProjectHero'
import { ProjectInfo } from '@/sections/ProjectInfo'
import { RecentProjects } from '@/sections/RecentProjects'

const project = PROJECTS.find(p => p.slug === 'dulber')

export const metadata = {
	title: project.title,
	headerTheme: 'light'
}

export default function () {
	return (
		<>
			<VideoModal />
			<ProjectHero {...project} />
			<ProjectInfo {...project} />
			<ProjectGallery {...project} />
			<RecentProjects slug='dulber' />
		</>
	)
}
