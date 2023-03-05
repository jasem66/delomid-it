import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChartBar,
  faCode,
  faDatabase,
  faPalette,
  faPenFancy,
  faSearch,
  faStore,
  faSuitcase,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'

export const businessData = [
  {
    id: 1,
    title: 'Data integration',
    description: 'Synchronization, migration, consolidation',
    icon: <FontAwesomeIcon className='font-icon' icon={faDatabase} />,
  },
  {
    id: 2,
    title: 'Data quality',
    description: 'Monitoring, Standardization, Deduplication, Profiling',
    icon: <FontAwesomeIcon className='font-icon' icon={faThumbsUp} />,
  },
  {
    id: 3,
    title: 'Customer repository',
    description: 'Single customer repository, Master Data Management',
    icon: <FontAwesomeIcon className='font-icon' icon={faSuitcase} />,
  },
  {
    id: 4,
    title: 'Data visualization',
    description: 'Process integration, service bus',
    icon: <FontAwesomeIcon className='font-icon' icon={faChartBar} />,
  },
]

export const digitalData = [
  {
    id: 1,
    title: 'Creation of website and application',
    description:
      'We design your website by studying with you your objectives, your targets and the opportunities it should be able to generate.',
    icon: <FontAwesomeIcon className='font-icon' icon={faCode} />,
    styleClass: 'up-anime',
  },
  {
    id: 2,
    title: 'Web referencing and SEO',
    description:
      'Your company will appear in the first results on search engines if its structure is well optimized by experts.',
    icon: <FontAwesomeIcon className='font-icon' icon={faSearch} />,
    styleClass: 'popin-anime',
  },
  {
    id: 3,
    title: 'Content writing',
    description:
      'Quality content has a positive impact on your SEO and writing web content must appeal to both Internet users and search engines.',
    icon: <FontAwesomeIcon className='font-icon' icon={faPenFancy} />,
    styleClass: 'up-anime',
  },
  {
    id: 4,
    title: 'internet marketing',
    description:
      'Developing your brand image, increasing your sales and energizing your network are very strategic issues in the development of your business.',
    icon: <FontAwesomeIcon className='font-icon' icon={faStore} />,
    styleClass: 'up-anime',
  },
  {
    id: 5,
    title: 'Graphic design',
    description:
      'Your image on the web is a major asset of your success in the digital world.Our specialists will design your visual design which will then be the key to your communication.',
    icon: <FontAwesomeIcon className='font-icon' icon={faPalette} />,
    styleClass: 'left-anime',
  },
]
