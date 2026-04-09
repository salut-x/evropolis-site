import { Button } from '@/components/Button'
import './CtaModal.scss'

const CtaDialog = ({ сlassName }) => {
	return (
		<Button
			className={сlassName}
			iconName='x-icon'
			label='Рассчитать стоимость'
			data-js-cta-trigger
		/>
	)
}

export default CtaDialog
