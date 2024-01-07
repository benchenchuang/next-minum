/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2023-12-23 22:38:09
 * @LastEditTime: 2024-01-07 12:37:43
 * @FilePath: /minum-website/src/components/SiteNavbar/index.tsx
 */
'use client';
import React, { useEffect, useState } from 'react'
import { Button, Dropdown, DropdownItem, Image, DropdownMenu, DropdownTrigger, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
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
                className="bg-navbar-gradient lg:h-10 lg:h-20"
                maxWidth="xl">
                {/* pc端 */}
                <NavbarContent className="hidden lg:flex">
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
                <NavbarContent className="lg:hidden">
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

                <NavbarContent className="hidden lg:flex gap-4" justify="center">
                    {
                        menuList.map((menu: MenuItem) => {
                            return (
                                <NavbarItem key={menu.path} isActive={pathname == menu.path ? true : false}>
                                    <Link
                                        className='text-white md:w-[150px] text-[16px] text-center font-[300] block h-full'
                                        href={menu.path}>{menu.name}</Link>
                                </NavbarItem>
                            )
                        })
                    }
                </NavbarContent>
                <NavbarMenu>
                    {menuList.map((menu: MenuItem) => (
                        <NavbarMenuItem key={menu.path}>
                            <Link
                                className="w-full text-site-primary"
                                href="#"
                                size="lg"
                            >{menu.name}</Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar >
        </>
    )
}

export default SiteNavbar