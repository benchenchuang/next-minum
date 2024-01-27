/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2023-12-23 22:15:45
 * @LastEditTime: 2024-01-27 19:14:00
 * @FilePath: /minum-website/src/app/(pages)/layout.tsx
 */

export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className='sm:-mt-10 md:-mt-20'>
            {children}
        </div>
    );
}
