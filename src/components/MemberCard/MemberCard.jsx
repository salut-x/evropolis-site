import './MemberCard.scss'

const MemberCard = props => {
	const { srcImg, role, name, ...rest } = props
	return (
		<div className='member-card' {...rest}>
			<img
				src={srcImg}
				alt=''
			/>
			<div className='member-card__body'>
				<p className='member-card__role text-sm'>{role}</p>
				<p className='member-card__name text-lg'>{name}</p>
			</div>
		</div>
	)
}

export default MemberCard
