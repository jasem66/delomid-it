import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faPenFancy, faSearch, faStore } from '@fortawesome/free-solid-svg-icons'

export const businessIntelliganceData = [
  {
    id: 1,
    title: 'Creation of website and application',
    desc: 'We design your website by studying with you your objectives, your targets and the opportunities it should be able to generate.',
    icon: <FontAwesomeIcon className='font-icon' icon={faCode} />,
  },
  {
    id: 2,
    title: 'Web referencing and SEO',
    desc: 'Your company will appear in the first results on search engines if its structure is optimized by experts.',
    icon: <FontAwesomeIcon className='font-icon' icon={faSearch} />,
  },
  {
    id: 3,
    title: ' Content writing',
    desc: 'Quality content affects your SEO. Writing web content must also appeal to Internet users and search engines.',
    icon: <FontAwesomeIcon className='font-icon' icon={faPenFancy} />,
  },
  {
    id: 4,
    title: 'internet marketing',
    desc: 'Developing your brand image, increasing your sales and energizing your network are very strategic issues in the development of your business.',
    icon: <FontAwesomeIcon className='font-icon' icon={faStore} />,
  },
  {
    id: 5,
    title: 'Graphic design',
    desc: 'Your image on the web is a major asset of your success in the online world. Thus, our specialists will design your visual design which will then be the key to your communication.',
    icon: <FontAwesomeIcon className='font-icon' icon={faStore} />,
  },
]
