import { CtaModal } from '@/components/CtaModal'
import './CTA.scss'

const CTA = () => {
	return (
		<section className='cta__section section__full section'>
			<div className='cta__bg'>
				<video
					className='cta__video'
					autoPlay
					muted
					loop
					playsInline
					poster='/src/assets/images/mission/bg.jpg'
				>
					<source
						src='/assets/mission.mp4'
						type='video/mp4'
					/>
					<img
						src='/src/assets/images/mission/bg.jpg'
						alt=''
					/>
				</video>
			</div>
			<div className='cta__inner container'>
				<div className='cta__content'>
					<div className='cta__text text-xl fade-in'>
						<span className='reveal'>
							<span className='reveal__inner'>Давайте обсудим ваш проект</span>
						</span>
						<span className='reveal'>
							<span className='reveal__inner'>
								и рассчитаем оптимальное решение
							</span>
						</span>
						<span className='reveal'>
							<span className='reveal__inner'>под задачи, бюджет и сроки</span>
						</span>
					</div>
					<div className='cta__btn-wrap'>
						<CtaModal />
					</div>
				</div>
			</div>
		</section>
	)
}

export default CTA
