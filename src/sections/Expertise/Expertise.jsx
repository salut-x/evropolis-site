import { ServiceCard } from '@/components/ServiceCard'
import { EXPERTISE_DATA } from '@/constants/expertiseData'
import './Expertise.scss'

const Expertise = props => {
  const { theme = 'light' } = props

  return (
    <section
      className='expertise'
      data-js-expertise
    >
      <div className='expertise__sticky' data-js-expertise-sticky>
        <ul className='expertise__list'>
          {EXPERTISE_DATA.map((card, i) => (
            <li
              className='expertise__item'
              key={card.id}
              data-js-expertise-item
            >
              <ServiceCard
                index={i + 1}
                total={EXPERTISE_DATA.length}
                category={card.category}
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                image={card.image}
                imageAlt={card.imageAlt}
                theme={theme}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Expertise
