import { defineThemeConfig } from '@utils/defineThemeConfig'
import previewImage from '@assets/img/social-preview-image.png'
import logoImage from '@assets/img/logo-lightfab-2.svg'

export default defineThemeConfig({
  name: 'Lightfab',
  id: 'lightfab',
  logo: logoImage,
  seo: {
    title: 'Lightfab',
    description:
      'A thematic semester on light-driven additive manufacturing.',
    author: 'Lightfab',
    image: previewImage, // Can also be a string e.g. '/social-preview-image.png',
  },
  colors: {
    primary: '#00B5E2',
    secondary: '#FFBF3F',
    neutral: '#b9bec4',
    outline: '#E0004D',
  },
  navigation: {
    darkmode: true,
    items: [
      {
        type: 'link',
        label: 'Home',
        href: '/lightfab/',
      },
      {
        type: 'link',
        label: 'Topics',
        href: '/lightfab/topics',
      },
      {
        label: 'Actions',
        type: 'dropdown',
        items: [
          {
            label: 'Master Internships',
            href: '/lightfab/internships',
          },
          {
            label: 'Short Term Visits',
            href: '/lightfab/visits',
          },
          {
            label: 'Events',
            href: '/lightfab/events',
          },
        ],
      },
      {
        type: 'link',
        label: 'Portfolio',
        href: '/lightfab/portfolio',
      },
      {
        type: 'link',
        label: 'Contact',
        href: '/lightfab/contact',
      },
    ],
  },
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/mblouk/lightfab',
      icon: 'lucide:github',
    },
  ],
})
