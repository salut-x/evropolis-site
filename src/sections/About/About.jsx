import { Button } from '@/components/Button'
import './About.scss'

const About = () => {
	return (
		<section className='about__section section'>
			<div className='about__inner container'>
				<header className='section__header'>
					<h2 className='section__title'>
						<span>(1)</span> О компании
					</h2>
					<p className='section__subtitle'>
						<span className='reveal'>
							<span className='reveal__inner'>Cтроим дома для</span>
						</span>
						<span className='reveal'>
							<span className='reveal__inner'>комфортной жизни</span>
						</span>
					</p>
				</header>
				<div className='section__body about__content'>
					<div class='about__image'>
						<img
							src='/src/assets/images/about/1.webp'
							alt='Дом'
							class='about__img'
							width={448}
							height={582}
						/>
					</div>
					<div className='about__info fade-in'>
						<p className='text-lg'>
							Строительная компания полного цикла с 15-летним опытом работы в
							Крыму. Мы управляем процессом от подбора участка до ландшафтного
							дизайна и мебели. Чтобы вы получили дом в срок и без доплат — с
							контролем на каждом этапе, даже если вы далеко от объекта.
						</p>
						<Button
							href='/about'
							iconName='x-icon'
							label='О компании'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
