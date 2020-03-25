export default {
  appName: 'AntDesign 后台管理启动蓝本',
  version: '1.0.0',
  roles: [
    { key: 'guest', text: '游客' },
    { key: 'admin', text: '普通管理员' },
    { key: 'super', text: '超级管理员' }
  ],
  permissions: {
    guest: [],
    admin: [
      { key: 'user', text: '用户管理' }
    ],
    super: [
      { key: 'user', text: '用户管理' },
      { key: 'post', text: '文章管理' },
      { key: 'system', text: '系统管理' }
    ]
  }
}