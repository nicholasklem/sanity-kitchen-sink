export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5ee76d05caf7f7c3990bbada',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-2hsi4k5i',
                  apiId: '6e749bc5-0601-4596-8b37-332bd7e07226'
                },
                {
                  buildHookId: '5ee76d057f0f56ae9955122a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-cokg4so8',
                  apiId: 'd5c8d6c6-a73c-4a46-af62-b6ca381b1ec5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nicholasklem/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-cokg4so8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
