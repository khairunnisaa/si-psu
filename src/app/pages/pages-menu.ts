import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/pages/home',
    home: true,
  },
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
        link: '/pages/psu/psu-beranda',
      },
      {
        title: 'PSU Kawasan Perumahan',
        link: '/',
        children: [
          {
            title: 'Kelola Data Perumahan',
            link: '/pages/psu-kawasan-perumahan/kelola-data-perumahan',
          },
        ],
      },
      {
        title: 'PSU Kawasan Permukiman',
        link: '/',
        children: [
          {
            title: 'Kelola Data Permukiman',
            link: '/pages/psu-kawasan-permukiman/kelola-data-permukiman',
          },
        ],
      },
      {
        title: 'PSU Pertamanan',
        link: '/',
        children: [
          {
            title: 'Kelola Data Pertaman',
            link: '/pages/psu-pertamanan/kelola-data-pertamanan',
          },
        ],
      },
    ],
  },
  {
    title: 'Kegiatan Fisik',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Beranda',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Peta Sebaran',
        link: '/pages/forms/layouts',
      },
    ],
  },
];
