/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2023-12-23 22:15:45
 * @LastEditTime: 2024-01-28 11:37:37
 * @FilePath: /minum-website/src/app/(pages)/layout.tsx
 */

import BackTop from "@/components/BackTop";
import SiteFooter from "@/components/SiteFooter";
import SiteNavbar from "@/components/SiteNavbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <SiteNavbar />
            <div className='sm:-mt-10 md:-mt-20'>
                {children}
            </div>
            <BackTop />
            <SiteFooter />
        </>
    );
}
