import React, { MouseEventHandler } from 'react';
import Image, { StaticImageData } from 'next/image';

export interface MenuItemProps {
    id: number;
    icon: StaticImageData;
    text: string;
    onClick: MouseEventHandler<HTMLImageElement> | undefined;
}

export default function MenuItem({ id, icon, text, onClick }: MenuItemProps) {
    return (
        <button type="button" className="menuItem--mainWrapper" key={id}>
            <Image
                src={icon}
                alt={`${text} icon`}
                onClick={onClick}
                className="menuItem--mainWrapper__icon"
            />
            {text}
        </button>
    );
}
