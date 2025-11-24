import img from '@/assets/user.png';
import { FacebookIcon, LinkedinIcon, XIcon } from '@/components/icons';
import { skills } from './data';

export const useGetUserData = () => {
  const user = {
    name: 'Ruslan Kolibabchuk',
    img,
    social: [
      {
        name: 'Linkedin',
        icon: <LinkedinIcon className="w-full h-full" />,
        link: 'https://www.linkedin.com/in/ruslan-kolibabchuk/',
      },
      {
        name: 'Facebook',
        icon: <FacebookIcon className="w-full h-full" />,
        link: 'https://www.facebook.com/ruslan.kolibabcuk/',
      },
      {
        name: 'X',
        icon: <XIcon className="w-full h-full" />,
        link: 'https://x.com/r_kodev/',
      },
    ],
    phone: '+380632357146',
    email: 'ruslan.kolibabchuk@gmail.com',
    address: 'Ukraine',
    personalInfo: {
      residence: 'UA',
      freelance: 'Available',
      address: 'Ukraine',
    },
    languages: [
      { name: 'Ukrainian', level: 100 },
      { name: 'English', level: 85 },
    ],
    technicalSkills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 88 },
      { name: 'PHP', level: 80 },
      { name: 'WordPress', level: 85 },
    ],
    extraSkills: [
      'Bootstrap',
      'Materialize',
      'Stylus',
      'Sass',
      'Less',
      'Gulp',
      'Webpack',
      'Grunt',
      'GIT',
    ],
  };

  return {
    user,
    skills,
  };
};
