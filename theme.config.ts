import { defineThemeConfig } from '@utils/defineThemeConfig'
import previewImage from '@assets/img/social-preview-image.png'
import logoImage from '@assets/img/logo-lightfab.svg'

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
        href: '/',
      },
      {
        type: 'link',
        label: 'Topics',
        href: '/topics',
      },
      {
        label: 'Actions',
        type: 'dropdown',
        items: [
          {
            label: 'Master Internships',
            href: '/internships',
          },
          {
            label: 'Short Term Visits',
            href: '/visits',
          },
          {
            label: 'Events',
            href: '/events',
          },
        ],
      },
      // {
      //   type: 'link',
      //   label: 'Projects',
      //   href: '/portfolio',
      // },
      {
        type: 'link',
        label: 'Contact',
        href: '/contact',
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
