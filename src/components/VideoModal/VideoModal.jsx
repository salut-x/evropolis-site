import Button from '@/components/Button/Button'
import Icon from '@/components/Icon/Icon'
import './VideoModal.scss'

const VideoModal = () => {
	return (
		<div
			className='video-modal'
			data-js-video-modal
		>
			<div className='video-modal__inner'>
				<button
					className='video-modal__close'
					data-js-video-modal-close
					aria-label='Закрыть'
				>
					<span className='video-modal__close-icon' />
				</button>

				<div className='video-modal__player'>
					<iframe
						className='video-modal__iframe'
						src=''
						data-js-video-modal-iframe
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					/>
				</div>
			</div>
		</div>
	)
}

export default VideoModal
