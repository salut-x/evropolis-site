import './ContactsHero.scss'

const ContactsHero = () => {
	return (
		<section className='contacts-hero'>
			<div className='contacts-hero__bg' />
			<div className='contacts-hero__inner container'>
				<h1 className='contacts-hero__title text-2xl'>
					<span className='reveal'>
						<span className='reveal__inner'>Контакты</span>
					</span>
				</h1>
			</div>
		</section>
	)
}

export default ContactsHero
