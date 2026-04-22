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
					poster='/src/assets/images/mission/bg.webp'
				>
					<source
						src='/assets/mission.mp4'
						type='video/mp4'
					/>
					<img
						src='/src/assets/images/mission/bg.webp'
						alt=''
					/>
				</video>
			</div>
			<div className='cta__inner container'>
				<div className='cta__content fade-in'>
					<h2 className='cta__text text-xl '>
            Давайте обсудим ваш проект и рассчитаем оптимальное решение под задачи, бюджет и сроки
					</h2>
					<div className='cta__btn-wrap'>
						<CtaModal />
					</div>
				</div>
			</div>
		</section>
	)
}

export default CTA
