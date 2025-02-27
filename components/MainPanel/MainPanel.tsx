import React from 'react';

import MenuItem from 'components/Menu/MenuItem';
import { MenuItemParms } from '../Menu/MenuItemsParms';

export default function MainPanel() {
    return (
        <section className="mainPanel--mainWrapper">
            <h1>
                Witaj
                {/* Tu imię pracownika */}
            </h1>
            <div className="mainPanel--mainWrapper__menuItemWrapper">
                {MenuItemParms.map((itemProps) => (
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
