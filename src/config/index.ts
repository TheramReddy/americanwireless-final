export const PRODUCT_CATEGORIES = [
  {
    label: 'Trending',
    value: 'Trending Now' as const,
    featured: [
      {
        name: 'Best Overall Picks',
        href: `/products?category=ui_kits`,
        imageSrc: '/nav/ui-kits/16pro_new.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=ui_kits&sort=desc',
        imageSrc: '/nav/ui-kits/s25_new.jpg',
      },
      {
        name: 'Bestsellers',
        href: '/products?category=ui_kits',
        imageSrc: '/nav/ui-kits/Huawei_new.jpg',
      },
    ],
  },
  {
    label: 'Accesories',
    value: 'Best_Sellers' as const,
    featured: [
      {
        name: 'DOLBY',
        href: `/products?category=icons`,
        imageSrc: '/nav/icons/soundbar_new.jpg',
      },
      {
        name: 'Headphones',
        href: '/products?category=icons&sort=desc',
        imageSrc: '/nav/icons/airpods_new.jpg',
      },
      {
        name: 'Cases',
        href: '/products?category=icons',
        imageSrc: '/nav/icons/case.webp',
      },
    ],
  },
]
