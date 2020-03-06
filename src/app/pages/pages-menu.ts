import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Beranda',
    icon: 'home-outline',
    link: '/pages/beranda',
    home: true,
  },
  {
    title: 'Menu Admin',
    group: true,
  },
  {
    title: 'PSU',
    icon: 'layout-outline',
    children: [
      {
        title: 'Beranda',
        link: '/pages/psu/beranda',
      },
      {
        title: 'PSU Kawasan Permukiman',
        link: '/pages/psu/kawasan-pemukiman',
        children: [
          {
            title: 'Kelola Data',
            link: '/pages/psu/kawasan-pemukiman/kelola-data',
          },
        ],
      },
    ],
  },
];
