import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { tocPlugin } from '@vuepress/plugin-toc'
import path from 'path'
import fs, { link } from 'fs'

function getFileList(filePath) {
    let files = fs.readdirSync(filePath);
    let listArr = [];
    files.forEach(filename => {
        if (filename === 'images' || filename === 'README.md') return;
        listArr.push(filename);
    })
    return listArr;
}
const filePath = path.resolve(path.join(__dirname, '../pages'));

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
                text: '杂文',
                link: '/pages/'
            },
            {
                text: '数据分析',
                children: [
                    {
                        text: 'pandas入门',
                        link: '/data-analysis/pandas/',
                    },
                    {
                        text: '气象分析',
                        children: [
                            '/data-analysis/Cartopy入门.md',
                            '/data-analysis/xarray入门.md',
                        ]
                    }
                ]
            },
            {
                text: 'vue',
                link: '/vue-study/'
            }
        ],
        sidebar: {
            '/pages/': [{
                text: '杂文',
                children: getFileList(filePath),
            }],
            '/data-analysis/pandas/': [{
                text: '利用Pandas进行数据分析',
                children: [
                    'numpy基础',
                    'pandas入门',
                    '数据清洗与预处理',
                    'matplotlib',
                ]
            }],
            '/vue-study': [{
                text: 'Vue学习笔记',
                children: [
                    '环境配置',
                    'Vue概述',
                    'vite搭建',
                    'vue的基本使用',
                    '全局组件与局部组件',
                    '组件样式基础',
                    'prop与emit',
                ],
            }]

        },
    }),
    markdown: {
        headers: {
            level: [2, 2],
        }
    },
    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
        tocPlugin({

        }),
    ]
}) 