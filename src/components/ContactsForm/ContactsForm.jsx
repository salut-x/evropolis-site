import Button from '@/components/Button/Button'
import Checkbox from '@/components/Checkbox/Checkbox'
import Field from '@/components/Field/Field'
import './ContactsForm.scss'

const ContactsForm = () => {
	return (
		<form
			className='contacts-form'
			action='/send.php'
			method='POST'
			data-js-support-form
			noValidate
		>
			{/* Honeypot — скрыто от людей, боты заполняют */}
			<input
				type='text'
				name='website'
				tabIndex='-1'
				autoComplete='off'
				aria-hidden='true'
				style={{ display: 'none' }}
			/>

			<div className='contacts-form__fields'>
				<Field
					className='contacts-form__cell'
					label='Имя и фамилия'
					name='full_name'
					placeholder='Иван Иванов'
					isRequired
				/>
				<Field
					className='contacts-form__cell'
					label='Телефон'
					name='phone'
					placeholder='Номер телефона*'
					inputMode='tel'
					mask='+7(000) 000-00-00'
					isRequired
				/>
				<Field
					className='contacts-form__cell'
					label='Комментарий'
					name='message'
					type='textarea'
					placeholder='Расскажите о проекте'
				/>
				<div className='contacts-form__cell contacts-form__cell--actions'>
					<Checkbox
						className='contacts-form__agreement'
						label='Даю согласие на рекламные рассылки'
						name='consent_marketing'
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
						<a href='/policy.pdf' target='_blank'>обработку персональных данных</a>
					</p>
				</div>
			</div>

			<div className='contacts-form__message contacts-form__message--success' aria-live='polite'>
				<p>Заявка отправлена! Мы свяжемся с вами в ближайшее время.
</p>
			</div>

			<div className='contacts-form__message contacts-form__message--error' aria-live='polite'>
				<p>Произошла ошибка. Попробуйте ещё раз или напишите нам напрямую.</p>
			</div>
		</form>
	)
}

export default ContactsForm
