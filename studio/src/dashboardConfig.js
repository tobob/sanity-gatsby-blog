export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc5f61046af88ddbd5df17d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-8o7vghr5',
                  apiId: 'edd7250d-6fb5-4f50-ba99-d710cb44037a'
                },
                {
                  buildHookId: '5fc5f6112d15a4ce040325bb',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ed4uxp3h',
                  apiId: 'd6504f68-1250-44f2-acbc-30d5c32bf028'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tobob/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ed4uxp3h.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
