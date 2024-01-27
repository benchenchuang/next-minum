/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2023-12-23 22:15:45
 * @LastEditTime: 2024-01-27 18:49:27
 * @FilePath: /minum-website/src/app/(pages)/layout.tsx
 */
import SiteNavbar from '@/components/SiteNavbar';
import SiteFooter from '@/components/SiteFooter';
import BackTop from '@/components/BackTop';

export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <div>
            <SiteNavbar />
            <div className='sm:-mt-10 md:-mt-20'>
                {children}
            </div>
            <BackTop />
            <SiteFooter />
        </div>
    );
}
