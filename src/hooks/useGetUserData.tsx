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
  };

  return {
    user,
    skills,
  };
};
