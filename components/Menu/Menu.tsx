'use client';

import React from 'react';
import Image from 'next/image';

import Logo from 'public/common/logo.png';
import LogoutIcon from 'public/specific/menu/logout-icon.png';

import MenuItem from './MenuItem';
import { MenuItemParms } from './MenuItemsParms';

interface MenuInterface {
    handleMenuChange: (value: number) => void;
}

export default function Menu({ handleMenuChange }: MenuInterface) {
    const logOut = async () => {
        try {
            const response = await fetch('/api/auth/logout', {
                method: 'POST',
            });

            if (response.ok) {
                localStorage.removeItem('token');

                window.location.href = '/';
            }
        } catch (error) {
            /* empty */
        }
    };
    return (
        <section className="menu--mainWrapper">
            <Image
                src={Logo}
                alt="cinema logo"
                className="menu--mainWrapper__logoImage"
                onClick={() => handleMenuChange(0)}
            />
            <nav className="menu--mainWrapper__navigation">
                {MenuItemParms.map((itemProps) => (
                    <MenuItem
                        key={itemProps.id}
                        id={itemProps.id}
                        icon={itemProps.icon}
                        text={itemProps.text}
                        onClick={() => handleMenuChange(itemProps.id)}
                    />
                ))}
            </nav>
            <MenuItem id={4} icon={LogoutIcon} text="Logout" onClick={logOut} />
        </section>
    );
}
