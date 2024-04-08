import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '481'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'da2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '6ac'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'bf1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '107'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '17d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'd1d'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '2bd'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '13d'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'fa3'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'ea2'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '240'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '8e5'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '050'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'd74'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'bf2'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '79f'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '08a'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '299'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '807'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '0d8'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'd8d'),
            routes: [
              {
                path: '/docs/Contract/使用TheGraph',
                component: ComponentCreator('/docs/Contract/使用TheGraph', 'b0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Contract/以太坊随机数',
                component: ComponentCreator('/docs/Contract/以太坊随机数', 'd72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Contract/MerkelTree',
                component: ComponentCreator('/docs/Contract/MerkelTree', '446'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Rust/1',
                component: ComponentCreator('/docs/Rust/1', '76c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ZK/2',
                component: ComponentCreator('/docs/ZK/2', '993'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '036'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
