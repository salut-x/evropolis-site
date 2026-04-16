import './AboutCompany.scss'

const AboutCompany = () => {
	return (
		<section className='about-company' data-js-about-company>
			<div className='about-company__bg' />
			<div className='about-company__inner container'>
				<h1 className='about-company__title text-2xl'>
					<span className='reveal'>
						<span className='reveal__inner'>CТРОИТЕЛЬНАЯ КОМПАНИЯ </span>
					</span>
					<span className='reveal'>
						<span className='reveal__inner'>ПОЛНОГО ЦИКЛА</span>
					</span>
				</h1>
				<div className='about-company__wrapper'>
					<div className='about-company__body'>
						<p className='about-company__text text-lg' data-js-about-company-text>
							Мы строим частные дома в Севастополе и по Крыму. Работаем с 2014
							года — начинали с ремонтов, потом стали строить дома целиком.
						</p>
						<p className='about-company__text text-lg' data-js-about-company-text>
							Делаем всё под ключ: проектируем, строим, делаем инженерию,
							отделку, производим мебель. Работают наши бригады — не привлекаем
							людей со стороны. Так проще контролировать процесс и качество.
						</p>
						<p className='about-company__text text-lg' data-js-about-company-text>
							Специализируемся на домах из газобетона. Цену фиксируем в договоре
							заранее, даём доступ к камерам на стройке, отчитываемся регулярно.
							За 10 лет построили 30 домов, все сдали в срок.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutCompany
