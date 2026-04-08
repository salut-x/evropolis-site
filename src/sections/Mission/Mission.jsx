import './Mission.scss'

const Mission = () => {
	return (
		<section className='mission__section section__full'>
			<div className='mission__bg'>
				<video
					className='mission__video'
					autoPlay
					muted
					loop
					playsInline
					poster='/src/assets/images/mission/bg.jpg'
				>
					<source
						src='/assets/mission.mp4'
						type='video/mp4'
					/>
					<img
						src='/src/assets/images/mission/bg.jpg'
						alt=''
					/>
				</video>
			</div>
			<div className='mission__inner container'>
				<div className='mission__content'>
					<h2 className='section__title'>
						<span>(3)</span> Миссия
					</h2>
					<div className='mission__text text-lg fade-in'>
						<p>
							Создавать дома, которые служат десятилетиями, и делать это так,
							чтобы вам не приходилось погружаться в хаос стройки. Мы управляем
							процессом — вы получаете результат
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Mission
