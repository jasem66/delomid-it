import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChartBar,
  faDatabase,
  faSuitcase,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'

export const businessIntelliganceData = [
  {
    id: 1,
    title: 'Data integration',
    description: [
      'Before you can analyze your data, you must first integrate it. The latter is a real problem for many companies. Especially when it involves multiple computing platforms.',
      'Indeed, delays are accumulating, thus preventing the realization of commercial opportunities as well as the execution of partnerships. It also influences the strengthening of relationships with customers and the streamlining of business processes.',
      'Indeed, delays are accumulating, thus preventing the realization of commercial opportunities as well as the execution of partnerships. It also influences the strengthening of relationships with customers and the streamlining of business processes.',
    ],
    icon: <FontAwesomeIcon className='font-icon' icon={faDatabase} />,
  },
  {
    id: 2,
    title: ' Data quality',
    description: [
      'We live in a world where the amount of data is increasing exponentially. Organizations, regardless of industry or size, are realizing the strategic importance of data quality.',
      'However, in a difficult economic environment, a strategic initiative focused on the creation of longer-term value will not obtain the support of senior management or the buy-in of operational users. Our approach aims to reconcile the near and the far. This by immediately creating value with the means at hand and at a very competitive cost.',
    ],
    icon: <FontAwesomeIcon className='font-icon' icon={faThumbsUp} />,
  },
  {
    id: 3,
    title: ' Single customer repository',
    description: [
      'At a time of the multiplication of contact points and the complexity of customer journeys, the customer repository is becoming an essential tool for companies wishing to optimize their customer experience.',
      'It is a system to bring together all the information and all the points of contact of each customer. This is to centralize all data, thus allowing a 360° customer view.',
      'Our solution is characterized by the extreme diversity of the data it can accommodate:',
      [
        'Personal (Profile Data).',
        'Transactional (Purchase History).',
        'Behavioral (web browsing, newsletter, feedback, geolocation, etc.).',
      ],
    ],
    icon: <FontAwesomeIcon className='font-icon' icon={faSuitcase} />,
  },
  {
    id: 4,
    title: 'Data visualization',
    description: [
      'We focus on helping your people understand the meaning of data by putting it into a visual context. Even more, we offer you to change the way you work with data by using the new generation of BI solutions.',
      'These latest offers intuitive features that allow you to gain a deeper understanding of your business. They guide you in creating reports, dashboards, infographics, and data visualizations.',
      "We'll also help you identify patterns, trends, and correlations that might otherwise go unnoticed in textual data. The form must make it possible to better apprehend the content.",
    ],
    icon: <FontAwesomeIcon className='font-icon' icon={faChartBar} />,
  },
]
