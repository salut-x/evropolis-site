import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { Link } from '@/components/Link'
import { contactsData } from '@/constants/contactsData'
import classNames from 'classnames'
import './MenuModal.scss'

const MenuDialog = ({ className }) => {
	return (
		<>
			<Button
				className={classNames('menu__button', className)}
				iconName='x-icon'
				label='Меню'
				mode='gray'
				data-js-menu-trigger
			/>
			<dialog
				className='menu-dialog'
				data-js-menu-dialog
			>
				<button
					className='menu-dialog__close'
					type='button'
					aria-label='Закрыть меню'
					data-js-menu-close
				>
					<Icon
						name='close'
						className='menu-dialog__close-icon'
					/>
				</button>
				<div className='menu-dialog__inner'>
					<nav className='menu-dialog__nav'>
						<div className='menu-dialog__list'>
							{contactsData.navLinks.map(({ label, href }, index) => (
								<Link
									key={index}
									href={href}
									label={label}
									variant='simple'
									className='menu-dialog__link'
								/>
							))}
						</div>
					</nav>
					<div
						className='menu-dialog__footer'
						data-js-menu-footer
					>
						<div className='menu-dialog__menu'>
							<div className='menu-dialog__column'>
								<p className='menu-dialog__column-title'>Контакты</p>
								<div className='menu-dialog__column-inner'>
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
							<div className='menu-dialog__column'>
								<p className='menu-dialog__column-title'>Ссылки</p>
								<ul className='menu-dialog__links-list'>
									{contactsData.externalLinks.map(({ label, href }, index) => (
										<li key={index}>
											<Link
												href={href}
												label={label}
												variant='simple'
												className='menu-dialog__links-link'
												target='_blank'
											/>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className='menu-dialog__extra'>
							<p>2026 Европолис</p>
							<p>© Все права защищены</p>
						</div>
					</div>
				</div>
			</dialog>
		</>
	)
}

export default MenuDialog
