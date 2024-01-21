/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2023-12-23 21:04:28
 * @LastEditTime: 2024-01-21 21:29:47
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
    keywords: "数据安全，自研产品，数据泄露",
    phone:'18112304808',
    telephone:'18112304808',
    email:'service@minum.cloud',
    address:"江苏省常州市新北区创意软件园E座1301"
}

export const mapKey = 'b4990743cbd5174a1d8bb548f357e3ee';

export const Home = '/';

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