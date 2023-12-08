import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";
import MarkdownItKatex from "markdown-it-katex";
import { searchPlugin } from "@vuepress/plugin-search";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { getTemplateSidebar } from "../template/articles.js";
import { getSolutionSidebar } from "../solution/articles.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Algo. Blog",
  description: "Algorithm Blog",
  base: "/algorithm-blog/",
  head: [
    ["link", { rel: "icon", href: "/algorithm-blog/img/favicon.ico" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css",
      },
    ],
  ],
  theme: defaultTheme({
    logo: "/img/logo_a.png",
    navbar: [
      {
        text: "模板（题）",
        link: "/template/",
      },
      {
        text: "题解",
        link: "/solution/",
      },
      {
        text: "资料",
        children: [
          {
            text: "《进阶指南》资源社区",
            link: "https://github.com/lydrainbowcat/tedukuri",
          },
          {
            text: "洛谷日报",
            link: "https://www.luogu.com.cn/discuss/show/48491",
          },
          {
            text: "OI Wiki",
            link: "https://oi-wiki.org/",
          },
        ],
      },
      {
        text: "Online Judge",
        children: [
          {
            text: "《进阶指南》题库",
            link: "https://www.acwing.com/problem/search/1/?search_content=%E7%AE%97%E6%B3%95%E7%AB%9E%E8%B5%9B%E8%BF%9B%E9%98%B6%E6%8C%87%E5%8D%97",
          },
          {
            text: "Virtual Judge",
            link: "https://vjudge.net/problem",
          },
          {
            text: "Codeforces",
            link: "https://codeforces.com/",
          },
          {
            text: "Nowcoder",
            link: "https://ac.nowcoder.com/acm/home",
          },
          {
            text: "LeetCode",
            link: "https://leetcode-cn.com/",
          },
        ],
      },
      {
        text: "Github",
        link: "https://github.com/i-am-a-soul",
      },
    ],
    sidebar: {
      "/template/": getTemplateSidebar(),
      "/solution/": getSolutionSidebar(),
    },
    sidebarDepth: 2,
    contributors: false,
    lastUpdatedText: "最后修改于",
  }),
  extendsMarkdown: (md) => {
    md.use(MarkdownItKatex);
  },
  plugins: [searchPlugin(), googleAnalyticsPlugin({ id: "G-1TQ8TVNERN" })],
});
