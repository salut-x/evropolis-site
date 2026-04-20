import { Link } from '@/components/Link'
import { Logo } from '@/components/Logo'
import { contactsData } from '@/constants/contactsData'
import './Footer.scss'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__inner container'>
				<div className='footer__top'>
					<div className='footer__requisites text-sm'>
						<p>{contactsData.company.name}</p>
						<p>{contactsData.company.inn}</p>
						<p>{contactsData.company.ogrn}</p>
					</div>
					<div className='footer__column'>
						<p className='footer__column-title'>Контакты</p>
						<div className='footer__column-inner'>
							<address>
								<p>{contactsData.addressCity}</p>
								<p>{contactsData.addressStreet}</p>
							</address>
							<address>
								<a href={contactsData.phoneHref}>{contactsData.phone}</a>
								<a href={contactsData.emailHref}>{contactsData.email}</a>
							</address>
						</div>
					</div>
					<nav className='footer__column'>
						<p className='footer__column-title'>Навигация</p>
						<ul className='footer__nav-list'>
							{contactsData.navLinks.map(({ label, href }, index) => (
								<li key={index}>
									<Link
										href={href}
										label={label}
										variant='simple'
										className='footer__nav-link'
									/>
								</li>
							))}
						</ul>
					</nav>
					<div className='footer__column'>
						<p className='footer__column-title'>Ссылки</p>
						<ul className='footer__links-list'>
							{contactsData.externalLinks.map(({ label, href }, index) => (
								<li key={index}>
									<Link
										href={href}
										label={label}
										variant='simple'
										className='footer__links-link'
										target='_blank'
									/>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className='footer__logo-wrap'>
					<Logo
						className='footer__logo'
						variant='footer'
					/>
				</div>

				<div className='footer__bottom text-sm'>
					<p className='footer__copy'>© 2026 Все права защищены</p>
					<div className='footer__legal'>
						<Link
							href='/privacy'
							label='Политика конфиденциальности'
							variant='simple'
						/>
						<span>|</span>
						<Link
							href='/terms'
							label='Пользовательское соглашение'
							variant='simple'
						/>
					</div>
					<a
						href='https://pines.agency'
						className='footer__credits'
						target='_blank'
					>
						Сайт pines.agency
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
