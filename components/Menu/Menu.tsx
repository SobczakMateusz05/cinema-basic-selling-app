'use client';

import React from 'react';
import Image from 'next/image';

import Logo from 'public/common/logo.png';
import LogoutIcon from 'public/specific/menu/logout-icon.png';

import MenuItem from './MenuItem';
import { MenuItemParms } from './MenuItemsParms';

export default function Menu() {
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
            />
            <nav className="menu--mainWrapper__navigation">
                {MenuItemParms.map((itemProps) => (
                    <MenuItem
                        key={itemProps.id}
                        id={itemProps.id}
                        icon={itemProps.icon}
                        text={itemProps.text}
                        onClick={itemProps.onClick}
                    />
                ))}
            </nav>
            <MenuItem id={5} icon={LogoutIcon} text="Logout" onClick={logOut} />
        </section>
    );
}
