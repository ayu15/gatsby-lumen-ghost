'use strict';

module.exports = {
  url: 'https://heyayush.com',
  title: 'Ayush Sharma | Web developer',
  subtitle: 'Web developer, front-end specialist',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalytics: {
    trackingId: process.env.GOOGLE_ANALYTICS
  },
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/about'
    },
    {
      label: 'Contact me',
      path: '/contact'
    }
  ],
  author: {
    name: 'Ayush',
    photo: '/photo.png',
    bio: 'Web developer, front-end specialist',
    contacts: {
      email: 'ayush.sharma1505@gmail.com',
      telegram: '#',
      twitter: 'heyayush',
      github: 'ayu15',
      rss: '#',
      vkontakte: '#'
    }
  },
  ghost: {
    apiUrl: process.env.GHOST_API_URL,
    contentApiKey: process.env.GHOST_CONTENT_API_KEY
  }
};
