const { getTemplateSidebar } = require('../template/articles.js')
const { getSolutionSidebar } = require('../solution/articles.js')
const moment = require('moment')

moment.locale('zh-cn')
module.exports = {
    title: 'Algo. Blog',
    description: 'Algorithm Blog',
	base: '/algorithm-blog/',
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.ico' }],
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }],
        ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css' }],
    ],
    plugins: [[
        '@vuepress/last-updated',
        {
            transformer: (timestamp) => {
                return moment(timestamp).format('YYYY年MM月DD日 HH时mm分')
            },
        },
    ], [
        '@vuepress/medium-zoom',
    ], [
		'@vuepress/back-to-top',
	], [
		'@vuepress/search',
		{
			searchMaxSuggestions: 10,
		},
	]],
    markdown: {
        lineNumbers: true,
        extendMarkdown: md => {
            md.use(require('markdown-it-katex'))
        },
    },
    themeConfig: {
        logo: '/img/logo_a.png',
        nav: [{
            text: '模板（题）',
            link: '/template/',
        }, {
            text: '题解',
            link: '/solution/',
        }, {
            text: '资料',
            items: [{
                text: '《进阶指南》资源社区',
                link: 'https://github.com/lydrainbowcat/tedukuri',
            }, {
                text: '洛谷日报',
                link: 'https://www.luogu.com.cn/discuss/show/48491',
            }, {
                text: 'OI Wiki',
                link: 'https://oi-wiki.org/',
            }],
        }, {
            text: 'Online Judge',
            items: [{
                text: '《进阶指南》题库',
                link: 'https://www.acwing.com/problem/search/1/?search_content=%E7%AE%97%E6%B3%95%E7%AB%9E%E8%B5%9B%E8%BF%9B%E9%98%B6%E6%8C%87%E5%8D%97',
            }, {
                text: 'Virtual Judge',
                link: 'https://vjudge.net/problem',
            }, {
                text: 'Codeforces',
                link: 'https://codeforces.com/',
            }, {
                text: 'Nowcoder',
                link: 'https://ac.nowcoder.com/acm/home',
            }, {
                text: 'LeetCode',
                link: 'https://leetcode-cn.com/',
            }],
        }, {
            text: 'Github',
            link: 'https://github.com/i-am-a-soul',
        }],
        sidebar: {
            '/template/': getTemplateSidebar(),
            '/solution/': getSolutionSidebar(),
        },
        sidebarDepth: 2,
        lastUpdated: '最后修改于',
    },
}