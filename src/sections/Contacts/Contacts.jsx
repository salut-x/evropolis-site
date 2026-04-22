import { ContactsForm } from '@/components/ContactsForm'
import { contactsData } from '@/constants/contactsData'
import './Contacts.scss'

const Contacts = () => {
	return (
		<section className='contacts section'>
			<div className='contacts__inner container'>
				<div className='contacts__list'>
					<div className='contacts__item'>
						<p className='contacts__item--title'>Офис</p>
						<div className='contacts__item--wrapper'>
							<address className='contacts__item--body text-lg'>
								<p>{contactsData.addressCity}</p>
								<p>{contactsData.addressStreet}</p>
							</address>
							<address className='contacts__item--body text-lg'>
								<p>{contactsData.workHours}</p>
								<p>{contactsData.daysOff}</p>
							</address>
						</div>
					</div>
					<div className='contacts__item'>
						<p className='contacts__item--title'>Контакты</p>
						<address className='contacts__item--body text-lg'>
							<a
								href={contactsData.phoneHref}
								className='contacts__item--link'
							>
								{contactsData.phone}
							</a>
							<a
								href={contactsData.emailHref}
								className='contacts__item--link'
							>
								{contactsData.email}
							</a>
						</address>
					</div>
				</div>
				<div className='contacts__form'>
					<div className='contacts__form-body'>
						<h2 className='contacts__form-title text-lg'>
							Рассчитать стоимость
						</h2>
						<p className='contacts__form-subtitle'>
							Оставьте заявку — получите расчёт стоимости вашего проекта.
						</p>
					</div>
					<ContactsForm />
				</div>
			</div>
		</section>
	)
}

export default Contacts
