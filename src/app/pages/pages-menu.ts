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
        title: 'Rekapitulasi',
        link: '/pages/psu/rekapitulasi',
      },
      {
        title: 'PSU Perumahan',
        link: '/',
        children: [
          {
            title: 'Kelola Data',
            link: '/pages/psu-kawasan-perumahan/kelola-data-perumahan',
          },
          {
            title: 'Rekapitulasi',
            link: '/pages/psu-kawasan-perumahan/rekapitulasi-perumahan',
          },
          {
            title: 'Monitoring',
            link: '/pages/psu-kawasan-perumahan/monitoring-perumahan',
          },
        ],
      },
      {
        title: 'PSU Kawasan Permukiman',
        link: '/',
        children: [
          {
            title: 'Kelola Data',
            link: '/pages/psu-kawasan-permukiman/kelola-data-permukiman',
          },
          {
            title: 'Rekapitulasi',
            link: '/pages/psu-kawasan-permukiman/rekapitulasi-permukiman',
          },
          {
            title: 'Monitoring',
            link: '/pages/psu-kawasan-permukiman/monitoring-permukiman',
          },
        ],
      },
      {
        title: 'PSU Pertamanan',
        link: '/',
        children: [
          {
            title: 'Kelola Data',
            link: '/pages/psu-pertamanan/kelola-data-pertamanan',
          },
          {
            title: 'Rekapitulasi',
            link: '/pages/psu-pertamanan/rekapitulasi-pertamanan',
          },
          {
            title: 'Monitoring',
            link: '/pages/psu-pertamanan/monitoring-pertamanan',
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
