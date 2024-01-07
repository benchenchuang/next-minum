/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2023-12-23 21:04:28
 * @LastEditTime: 2024-01-07 10:58:33
 * @FilePath: /minum-website/src/config/site.ts
 */
export type SiteConfig = typeof siteConfig;
export interface MenuItem {
    name:string
    path:string
}

export const siteConfig = {
    name: "大道云隐",
    description: "密数云是我司为解决数据窃取、数据泄露等常见数据安全问题的全国产化自研产品",
    keywords: "数据安全，自研产品，数据泄露"
}

export const menuList:MenuItem[] = [
    {
        name: "首页",
        path: '/'
    },
    {
        name: "产品介绍",
        path: '/product'
    },
    {
        name: "合作案例",
        path: '/cooperation'
    },
    {
        name: "服务支持",
        path: '/support'
    },
    {
        name: "联系我们",
        path: '/contact'
    }
]