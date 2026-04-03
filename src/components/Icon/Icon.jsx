import classNames from 'classnames'
import { Sprite } from 'minista/assets'
import './Icon.scss'

const Icon = props => {
	const { className, name } = props

	return (
		<span className={classNames(className, 'icon')}>
			<Sprite
				iconId={name}
				src={`/src/assets/sprite/${name}.svg`}
				// fill={hasFill ? 'currentColor' : 'none'}
				// stroke={hasFill ? 'none' : 'currentColor'}
			/>
		</span>
	)
}

export default Icon
