import { Contacts } from '@/sections/Contacts'
import { ContactsHero } from '@/sections/ContactsHero'

export const metadata = {
	title: 'Контакты',
	headerTheme: 'light'
}

export default function () {
	return (
		<>
			<ContactsHero />
			<Contacts />
		</>
	)
}
