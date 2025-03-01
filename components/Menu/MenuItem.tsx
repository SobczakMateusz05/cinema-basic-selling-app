import React, { MouseEventHandler } from 'react';
import Image, { StaticImageData } from 'next/image';

export interface MenuItemInterface {
    id: number;
    icon: StaticImageData;
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function MenuItem({
    id,
    icon,
    text,
    onClick,
}: MenuItemInterface) {
    return (
        <button
            type="button"
            className="menuItem--mainWrapper"
            key={id}
            onClick={onClick}
        >
            <Image
                src={icon}
                alt={`${text} icon`}
                className="menuItem--mainWrapper__icon"
            />
            {text}
        </button>
    );
}
