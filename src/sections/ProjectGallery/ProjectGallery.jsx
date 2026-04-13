import './ProjectGallery.scss'

const GalleryGrid = props => {
	const { images = [], modifier } = props

	if (!images.length) return null

	return (
		<div className={`project-gallery__grid project-gallery__grid--${modifier}`}>
			{images.map((src, i) => (
				<div className='project-gallery__item' key={i}>
					<img className='project-gallery__img' src={src} alt='' />
				</div>
			))}
		</div>
	)
}

const ProjectGallery = props => {
	const {
		galleryExterior = [],
		galleryInterior = [],
		descriptionInterior
	} = props

	return (
		<section className='project-gallery'>
			<div className='project-gallery__inner container'>

				<GalleryGrid images={galleryExterior} modifier='exterior' />

				{galleryInterior.length > 0 && (
					<>
						<div className='project-gallery__description'>
							<h2 className='project-gallery__description-caption text-base'>
								Интерьер
							</h2>
							<p className='project-gallery__description-content text-lg'>
								{descriptionInterior}
							</p>
						</div>

						<GalleryGrid images={galleryInterior} modifier='interior' />
					</>
				)}

			</div>
		</section>
	)
}

export default ProjectGallery
