module.exports = {
    type: 'blog',
    blogConfig: {
        category: {
            location: 2,
            text: '分类'
        },
        tag: {
            location: 3,
            text: '标签'
        },
        socialLinks: [
            // 信息栏展示社交信息
            { icon: 'reco-github', link: 'https://github.com/Kabobi' },
            {
                icon: 'reco-juejin',
                link: 'https://juejin.cn/user/3210229683857895'
            },
            {
                icon: 'reco-mail',
                link: 'mailto:kabobi@163.com'
            }
        ]
    },
    logo: '/head.png',
    authorAvatar: '/head.png',
    lastUpdated: 'Last Updated',
    author: 'kabob',
    startYear: '2020'
}
