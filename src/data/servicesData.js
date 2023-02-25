import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faGraduationCap,
  faPen,
  faWarehouse,
} from '@fortawesome/free-solid-svg-icons'

export const servicesData = [
  {
    id: 1,
    title: 'Advice',
    desc: [
      'project framework',
      'Audit',
      'Feasibility study',
      'Process',
      'Architecture',
    ],
    icon: <FontAwesomeIcon className='font-icon' icon={faPen} />,
    color: '2da368',
    anime: 'down-anime',
  },
  {
    id: 2,
    title: 'Achievement',
    desc: ['Functional analysis', 'Development', 'Testing', 'Steering'],
    icon: <FontAwesomeIcon className='font-icon' icon={faCode} />,
    color: 'b0d13a',
    anime: 'up-anime',
  },
  {
    id: 3,
    title: 'Integration',
    desc: [
      'Analysis of your processes',
      'Study of existing architecture',
      'Data management solution integration',
    ],
    icon: <FontAwesomeIcon className='font-icon' icon={faWarehouse} />,
    color: 'f29437',
    anime: 'down-anime',
  },
  {
    id: 4,
    title: 'Coaching',
    desc: ['Training', 'Technical support', 'Change management'],
    icon: <FontAwesomeIcon className='font-icon' icon={faGraduationCap} />,
    color: 'b52929',
  },
]
