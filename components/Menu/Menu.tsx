import React from 'react';
import Image from 'next/image';

import Logo from 'public/common/logo.png';
import LogoutIcon from 'public/specific/menu/logout-icon.png';
import ShowingIcon from 'public/specific/menu/showing-icon.png';
import FilmIcon from 'public/specific/menu/film-icon.png';
import GlassesIcon from 'public/specific/menu/glasses-icon.png';
import SnackIcon from 'public/specific/menu/snack-icon.png';
import SpectatorIcon from 'public/specific/menu/spectator-icon.png';

import MenuItem, { MenuItemProps } from './MenuItem';

export default function Menu() {
    const menuItem: MenuItemProps[] = [
        { id: 0, icon: SpectatorIcon, text: 'Spectators' },
        { id: 1, icon: SnackIcon, text: 'Snacks' },
        { id: 2, icon: GlassesIcon, text: 'Glasses' },
        { id: 3, icon: ShowingIcon, text: 'Showings' },
        { id: 4, icon: FilmIcon, text: 'Films' },
    ];
    return (
        <section className="menu--mainWrapper">
            <Image
                src={Logo}
                alt="cinema logo"
                className="menu--mainWrapper__logoImage"
            />
            <nav className="menu--mainWrapper__navigation">
                {menuItem.map((itemProps) => (
                    <MenuItem
                        key={itemProps.id}
                        id={itemProps.id}
                        icon={itemProps.icon}
                        text={itemProps.text}
                    />
                ))}
            </nav>
            <MenuItem id={5} icon={LogoutIcon} text="Logout" />
        </section>
    );
}
