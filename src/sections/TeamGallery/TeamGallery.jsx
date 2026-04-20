import './TeamGallery.scss'

const TeamGallery = () => {
	return (
		<section className='team-gallery'>
			<div className='team-gallery__inner'>
				<div className='team-gallery__grid'>
					<img
						src='/src/assets/images/team-gallery/2.jpg'
						alt=''
						className='team-gallery__image'
						loading='lazy'
					/>
					<img
						src='/src/assets/images/team-gallery/3.jpg'
						alt=''
						className='team-gallery__image'
						loading='lazy'
					/>
					<img
						src='/src/assets/images/team-gallery/1.jpg'
						alt=''
						className='team-gallery__image'
						loading='lazy'
					/>
				</div>
			</div>
		</section>
	)
}

export default TeamGallery
