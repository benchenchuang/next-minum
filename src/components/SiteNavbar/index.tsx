/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2023-12-23 22:38:09
 * @LastEditTime: 2024-01-07 15:13:52
 * @FilePath: /minum-website/src/components/SiteNavbar/index.tsx
 */
'use client';
import React, { useEffect, useState } from 'react'
import { Image, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { usePathname } from 'next/navigation';
import { MenuItem, menuList } from '@/config/site';

const SiteNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [path, setPath] = useState<string>('');

    const pathname = usePathname();
    useEffect(() => {
        setPath(pathname)
    }, [])

    return (
        <>
            <Navbar
                shouldHideOnScroll
                className="bg-navbar-gradient sm:h-10 md:h-16 lg:h-20"
                maxWidth='xl'
                height={'3rem'}
                classNames={{
                    item: [
                        "flex",
                        "relative",
                        "h-full",
                        "data-[active=true]:after:content-['']",
                        "data-[active=true]:after:absolute",
                        "data-[active=true]:after:bottom-0",
                        "data-[active=true]:after:left-0",
                        "data-[active=true]:after:right-0",
                        "data-[active=true]:after:h-[4px]",
                        "data-[active=true]:after:bg-[#66ADFF]",
                        "data-[active=true]:bg-navbar-active",
                    ],
                }}>
                {/* pc端 */}
                <NavbarContent className="hidden md:flex">
                    <NavbarBrand>
                        <Link href='/'>
                            <Image
                                width={132}
                                alt="大道云隐"
                                src="/images/common/logo.png"
                            />
                        </Link>
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent className="md:hidden">
                    <NavbarBrand>
                        <Link href='/'>
                            <Image
                                width={60}
                                alt="大道云隐"
                                src="/images/common/logo.png"
                            />
                        </Link>
                    </NavbarBrand>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="text-white"
                    />
                </NavbarContent>

                <NavbarContent className="hidden md:flex gap-0 md:h-16 lg:h-20">
                    {
                        menuList.map((menu: MenuItem) => {
                            return (
                                <NavbarItem
                                    key={menu.path}
                                    isActive={pathname == menu.path ? true : false}>
                                    <Link
                                        className='text-white md:w-[100px] md:text-[15px] xl:w-[150px] xl:text-[18px] font-[300] h-full flex justify-center'
                                        href={menu.path}>{menu.name}</Link>
                                </NavbarItem>
                            )
                        })
                    }
                </NavbarContent>
                <NavbarMenu>
                    {menuList.map((menu: MenuItem) => (
                        <NavbarMenuItem
                            key={menu.path}
                            isActive={pathname == menu.path ? true : false}>
                            <Link
                                className="w-full text-site-primary"
                                href={menu.path}
                            >{menu.name}</Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar >
        </>
    )
}

export default SiteNavbar