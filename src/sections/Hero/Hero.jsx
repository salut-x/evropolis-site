import './Hero.scss'

const Hero = () => {
	return (
		<section className='hero'>
			<div className='hero__bg' />
			<div className='hero__inner container'>
				<div className='hero__content'>
					<h1 className='hero__title text-xl'>
						<span className='hero__title-line'>
							<span className='hero__title-line-inner'>Строим дома</span>
						</span>
						<span className='hero__title-line'>
							<span className='hero__title-line-inner'>в Севастополе и Крыму.</span>
						</span>
						<span className='hero__title-line'>
							<span className='hero__title-line-inner'>Без хаоса и сюрпризов</span>
						</span>
					</h1>
					<div className='hero__partners'>
						<img
							src='/src/assets/images/partners/vtb-logo.png'
							className='hero__partners-item'
							width={70}
							height={24}
						/>
						<img
							src='/src/assets/images/partners/sber-logo.png'
							className='hero__partners-item'
							width={172}
							height={30}
						/>
						<div className='hero__partners-descriptions'>
							<p className='text-sm'>Аккредитованный застройщик</p>
						</div>
					</div>
				</div>
			</div>
			<div className='hero__midline'>
				<div className='hero__midline-content'>
					<div className='hero__midline-mask'>
						<p className='hero__midline-item'>
							Полный цикл от участка до мебели
						</p>
					</div>
					<div className='hero__midline-mask'>
						<p className='hero__midline-item'>Фиксированная смета</p>
					</div>
					<div className='hero__midline-mask'>
						<p className='hero__midline-item'>Чёткие сроки</p>
					</div>
					<div className='hero__midline-mask'>
						<p className='hero__midline-item'>15 лет опыта</p>
					</div>
				</div>
				<div className='hero__midline-line'></div>
			</div>
		</section>
	)
}

export default Hero
