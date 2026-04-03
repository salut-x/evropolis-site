import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import './CtaModal.scss'

const CtaDialog = ({ сlassName }) => {
	return (
		<>
			<Button
				className={сlassName}
				iconName='x-icon'
				label='Обсудить проект'
				data-js-cta-trigger
			/>
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
					<h2 className='cta-dialog__title'>Обсудить проект</h2>
					<p className='cta-dialog__subtitle'>
						Оставьте контакты, и мы свяжемся с вами в ближайшее время
					</p>
				</div>
			</dialog>
		</>
	)
}

export default CtaDialog
