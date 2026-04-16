import Button from '@/components/Button/Button'
import Checkbox from '@/components/Checkbox/Checkbox'
import Field from '@/components/Field/Field'
import './ContactsForm.scss'

const ContactsForm = () => {
	return (
		<form
			className='contacts-form'
			action=''
			data-js-support-form
			noValidate
		>
			<Field
				className='contacts-form__cell'
				label='Имя и фамилия'
				placeholder='Иван Иванов'
				isRequired
			/>
			<Field
				className='contacts-form__cell'
				label='Телефон'
				placeholder='Номер телефона*'
				inputMode='tel'
				mask='+7(000) 000-00-00'
				isRequired
			/>
			<Field
				className='contacts-form__cell'
				label='Комментарий'
				type='textarea'
				placeholder='Расскажите о проекте'
			/>
			<div className='contacts-form__cell contacts-form__cell--actions'>
				<Checkbox
					className='contacts-form__agreement'
					label='Даю согласие на рекламные рассылки'
					isRequired
				/>
				<Button
					className='contacts-form__submit-button'
					label='Отправить'
					type='submit'
					iconName='x-icon'
				/>
				<p className='contacts-form__agreement contacts-form__agreement--secondary text-sm'>
					Нажимая кнопку , я даю согласие на{' '}
					<a href='#'>обработку персональных данных</a>
				</p>
			</div>
		</form>
	)
}

export default ContactsForm
