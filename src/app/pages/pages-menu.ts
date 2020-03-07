import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Beranda',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'Menu Admin',
    group: true,
  },
  {
    title: 'UI Features',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
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
