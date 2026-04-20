import './TeamGallery.scss'

const images = [
	'/src/assets/images/team-gallery/2.jpg',
	'/src/assets/images/team-gallery/3.jpg',
	'/src/assets/images/team-gallery/1.jpg',
]

const TeamGallery = () => {
	return (
		<section className='team-gallery'>
			<div className='team-gallery__inner'>
				<div
					className='team-gallery__grid swiper'
					data-js-team-gallery
				>
					<div className='team-gallery__list swiper-wrapper'>
						{images.map((src, i) => (
							<div
								className='team-gallery__item swiper-slide'
								key={i}
							>
								<img
									src={src}
									alt=''
									className='team-gallery__image'
									loading='lazy'
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default TeamGallery
