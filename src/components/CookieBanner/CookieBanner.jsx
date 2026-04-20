import { Button } from '@/components/Button'
import './CookieBanner.scss'

const CookieBanner = () => {
	return (
		<div
			className='cookie-banner'
			data-js-cookie-banner
			aria-live='polite'
			aria-label='Уведомление об использовании cookies'
		>
			<p className='cookie-banner__text'>
				Мы используем файлы cookie для улучшения работы сайта. Продолжая
				использовать сайт, вы соглашаетесь с нашей{' '}
				<a
					className='cookie-banner__link'
					href='/privacy'
				>
					политикой конфиденциальности
				</a>
				.
			</p>
			<div className='cookie-banner__actions'>
				<Button
					className='cookie-banner__accept'
					label='Отклонить'
					mode='ghost'
					data-js-cookie-decline
				/>
				<Button
					className='cookie-banner__accept'
					label='Принять'
					mode='gray'
					icon='x-icon'
					data-js-cookie-accept
				/>
			</div>
		</div>
	)
}

export default CookieBanner
