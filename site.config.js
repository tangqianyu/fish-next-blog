module.exports = {
  name: 'Quentin',
  title: 'Quentin Tang',
  description: 'Front-End Developer',
  avatar: '/avatar.jpg',
  logo: '/logo.png',
  siteUrl: 'https://tangqianyu.github.io',
  // icon 请在 src/components/Profile.tsx 中修改
  links: [
    { name: 'GitHub', link: 'https://github.com/tangqianyu' },
    { name: 'X', link: '' },
    { name: '稀土掘金', link: '' },
    { name: 'RSS', link: '/feed.xml' },
  ],
  friends: [
    // { name: '', link: '' },
  ],
  // en | zh-CN
  language: 'en',
  // 侧边目录
  toc: true,
  // 显示上一篇下一篇按钮
  adjacentPosts: true,
  // 配置文章过时提醒阈值
  outdatedPostThresholdDays: 90,
  markdown: {
    // 统一配置 CodeBlock 是否显示行号，也可以在 frontmatter 中通过 lineNumbers 字段单独设置
    lineNumbers: false,
  },
  backToTopButton: false
}
