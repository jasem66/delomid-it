import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChartBar,
  faCode,
  faDatabase,
  faGraduationCap,
  faPen,
  faSuitcase,
  faThumbsUp,
  faWarehouse,
} from '@fortawesome/free-solid-svg-icons'

export const servicesData = [
  {
    id: 1,
    title: 'Advice',
    description: [
      'Audit project framework',
      'Feasibility study',
      'Process',
      'Architecture',
    ],
    icon: <FontAwesomeIcon className='font-icon' icon={faPen} />,
  },
  {
    id: 2,
    title: 'Achievement',
    description: [
      'Functional',
      'analysis',
      'Development',
      'Testing',
      'Steering',
    ],
    icon: <FontAwesomeIcon className='font-icon' icon={faCode} />,
  },
  {
    id: 3,
    title: 'Integration',
    description: [
      'Analysis of your processes',
      'Study of existing architecture',
      'Data management solution integration',
    ],
    icon: <FontAwesomeIcon className='font-icon' icon={faWarehouse} />,
  },
  {
    id: 4,
    title: 'Coaching',
    description: ['Training', 'Technical support', 'Change management'],
    icon: <FontAwesomeIcon className='font-icon' icon={faGraduationCap} />,
  },
]
