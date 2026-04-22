import './TeamGallery.scss'

const images = [
	'/src/assets/images/team-gallery/2.webp',
	'/src/assets/images/team-gallery/3.webp',
	'/src/assets/images/team-gallery/1.webp'
]

const TeamGallery = () => {
	return (
		<section className='team-gallery section'>
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
