import Button from '@/components/Button/Button'
import './ProjectInfo.scss'

const ProjectInfo = props => {
	const { description, specs, tags, price, video, spec } = props

	return (
		<section className='project-info'>
			<div className='project-info__inner container'>
				<ul className='project-info__tags'>
					{tags.map((tag, i) => (
						<li
							className='project-info__tag'
							key={i}
						>
							<span className='project-info__tag-label'>{tag.label}:</span>
							<span className='project-info__tag-value'>{tag.value}</span>
						</li>
					))}
				</ul>

				<div className='project-info__content'>
					<p className='project-info__description text-lg'>{description}</p>

					<div className='project-info__specs'>
						<h2 className='project-info__specs-title text-lg'>
							Технические характеристики:
						</h2>

						<ul className='project-info__specs-list'>
							{specs.map((item, i) => (
								<li
									className='project-info__specs-item'
									key={i}
								>
									{item}
								</li>
							))}
						</ul>

						{price && (
							<p className='project-info__price'>
								Стоимость {price}
								<span className='project-info__price-note'>
									{' '}
									(комплектацию и цену уточняйте у менеджера)
								</span>
							</p>
						)}
					</div>

					<div className='project-info__actions'>
						{spec && (
							<Button
								className='project-info__btn'
								href={spec}
								target='_blank'
								label='Полная СПЕЦИФИКАЦИЯ'
								iconName='x-icon'
								iconPosition='before'
							/>
						)}
						{video && (
							<Button
								className='project-info__btn'
								label='ВИДЕО ПРЕЗЕНТАЦИЯ'
								iconName='x-icon'
								iconPosition='before'
								data-js-video-modal-trigger={video}
								mode='gray'
							/>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export { ProjectInfo }
