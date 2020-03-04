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
    title: 'Test',
    icon: 'home-outline',
    link: '/pages/test',
    home: true,
    children: [
      {
        title: 'Coba Test',
        link: '/pages/test/coba-test',
      },
      {
        title: 'Coba Test Kedua',
        link: '/pages/test/coba-test-kedua',
      },
      ],
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
        title: 'Peta Sebaran',
        link: '/pages/psu/peta-sebaran',
      },
      {
        title: 'PSU Kawasan Perumahan',
        link: '/pages/maps/gmaps',
        children: [
          {
            title: 'Peta Sebaran',
            link: '/pages/maps/gmaps',
          },
          {
            title: 'Entry Data',
            link: '/pages/tables/smart-table',
          },
          {
            title: 'Status',
            link: '/pages/tables/smart-table',
          },
          {
            title: 'Kondisi',
            children: [
              {
                title: 'Baik',
                link: '/pages/layout/infinite-list',
              },
              {
                title: 'Rusak Ringan',
                link: '/pages/layout/infinite-list',
              },
              {
                title: 'Rusak Berat',
                link: '/pages/layout/infinite-list',
              },
            ],
          },
          {
            title: 'Koordinat Perumahan',
            link: '/pages/layout/infinite-list',
          },
          {
            title: 'IP Camera (CCTV)',
            link: '/pages/layout/infinite-list',
          },
          {
            title: 'Keterangan',
            link: '/pages/layout/infinite-list',
          },
        ],
      },
      {
        title: 'PSU Kawasan Permukiman',
        link: '/pages/psu/kawasan-pemukiman',
        children: [
          {
            title: 'Peta Sebaran',
            link: '/pages/layout/infinite-list',
          },
          {
            title: 'Entry Data',
            link: '/pages/layout/infinite-list',
          },
          {
            title: 'Status',
            link: '/pages/layout/infinite-list',
          },
          {
            title: 'Kondisi',
            link: '/pages/layout/infinite-list',
            children: [
              {
                title: 'Baik',
                link: '/pages/layout/infinite-list',
              },
              {
                title: 'Rusak Ringan',
                link: '/pages/layout/infinite-list',
              },
              {
                title: 'Rusak Berat',
                link: '/pages/layout/infinite-list',
              },
            ],
          },
          {
            title: 'Koordinat Perumahan',
            link: '/pages/layout/infinite-list',
          },
          {
            title: 'IP Camera (CCTV)',
            link: '/pages/layout/infinite-list',
          },
          {
            title: 'Keterangan',
            link: '/pages/layout/infinite-list',
          },
        ],
      },
      {
        title: 'Pertamanan',
        link: '/pages/psu/pertamanan',
        children: [
          {
            title: 'Peta Sebaran',
            link: '/pages/layout/infinite-list',
          },
          {
            title: 'Entry Data',
            link: '/pages/layout/infinite-list',
          },
          {
            title: 'Kondisi',
            link: '/pages/layout/infinite-list',
            children: [
              {
                title: 'Baik',
                link: '/pages/layout/infinite-list',
              },
              {
                title: 'Rusak Ringan',
                link: '/pages/layout/infinite-list',
              },
              {
                title: 'Rusak Berat',
                link: '/pages/layout/infinite-list',
              },
            ],
          },
          {
            title: 'Koordinat',
            link: '/pages/layout/infinite-list',
          },
          {
            title: 'IP Camera',
            link: '/pages/layout/infinite-list',
          },
          {
            title: 'Keterangan',
            link: '/pages/layout/infinite-list',
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
