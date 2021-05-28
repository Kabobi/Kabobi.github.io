const themeConfig = require('./config/theme/')

module.exports = {
    title: "kabob's blog",
    description: "Excuses sound best to the person who's making them up.",
    dest: 'public',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        [
            'meta',
            {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1,user-scalable=no'
            }
        ]
    ],
    theme: 'reco',
    themeConfig,
    markdown: {
        lineNumbers: true
    },
    plugins: [
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: {
                    message: '发现新内容可用',
                    buttonText: '刷新'
                }
            }
        ]
    ]
}
