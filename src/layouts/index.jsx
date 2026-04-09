// src/layouts/index.jsx
import { Icon } from '@/components/Icon'
import { Preloader } from '@/components/Preloader'
import '@/components/Preloader/Preloader.scss'
import { Content } from '@/layouts/Content'
import { Footer } from '@/layouts/Footer'
import { Header } from '@/layouts/Header'
import '@/styles'
import { Head } from 'minista/head'

export const metadata = {
	title: 'Европолис' // базовый title
}

export default function (props) {
	const { children, title, url, headerTheme = 'dark' } = props

	return (
		<>
			<Head htmlAttributes={{ lang: 'en' }}>
				<link
					rel='icon'
					type='image/png'
					href='https://via.placeholder.com/32'
				/>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link
					rel='manifest'
					href='/site.webmanifest'
				/>
				<title>{title ? `Европолис | ${title}` : 'Европолис'}</title>
				<script
					type='module'
					src='src/main.js'
				/>
			</Head>
			<Preloader />
			<Header
				url={url}
				theme={headerTheme}
			/>
			<Content>{children}</Content>
			<Footer />
			<dialog
				className='cta-dialog'
				data-js-cta-dialog
			>
				<button
					className='cta-dialog__close'
					type='button'
					aria-label='Закрыть'
					data-js-cta-close
				>
					<Icon
						name='close'
						className='menu-dialog__close-icon'
					/>
				</button>
				<div className='cta-dialog__inner'>
					<h2 className='cta-dialog__title'>Рассчитать стоимость</h2>
					<p className='cta-dialog__subtitle'>
						Оставьте контакты, и мы свяжемся с вами в ближайшее время
					</p>
				</div>
			</dialog>
		</>
	)
}
