import React from 'react';
import Image, { StaticImageData } from 'next/image';

export interface MenuItemProps {
    id: number;
    icon: StaticImageData;
    text: string;
}

export default function MenuItem({ id, icon, text }: MenuItemProps) {
    return (
        <button type="button" className="menuItem--mainWrapper" key={id}>
            <Image
                src={icon}
                alt={`${text} icon`}
                className="menuItem--mainWrapper__icon"
            />
            {text}
        </button>
    );
}
