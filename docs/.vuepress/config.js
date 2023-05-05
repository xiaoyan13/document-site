import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'VuePress',
    description: 'document lib',
    head: [['link', { rel: 'icon', href: '/images/avatar.png' }]],
    theme: defaultTheme({
        // 默认主题配置
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: 'js',
                link: '/异步基础.md'
            }
        ],
        sidebar: {
            
            '/onebook/': [
                {
                    text: '一本书',
                    children: [''],
                },
            ],
            '/': [
                ''
            ],
        },
    }),
    markdown: {
        headers: {
            level: [2, 2],
        }
    }
}) 