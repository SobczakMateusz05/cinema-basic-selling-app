import React from 'react';

import MenuItem from 'components/Menu/MenuItem';
import { menuItem } from 'components/Menu/Menu';

export default function MainPanel() {
    return (
        <section className="mainPanel--mainWrapper">
            <h1>Witaj {/* Tu imię pracownika*/}</h1>
            <div className="mainPanel--mainWrapper__meuItemWrapper">
                {menuItem.map((itemProps) => (
                    <MenuItem
                        key={itemProps.id}
                        id={itemProps.id}
                        icon={itemProps.icon}
                        text={itemProps.text}
                        onClick={itemProps.onClick}
                    />
                ))}
            </div>
        </section>
    );
}
