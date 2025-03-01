'use client';

import React, { useState, useEffect } from 'react';

import MenuItem from 'components/Menu/MenuItem';
import { MenuItemParms } from '../Menu/MenuItemsParms';

export default function MainPanel() {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        async function employeeFetch() {
            const res = await fetch('api/mainPanel/userRealName');

            const data = await res.json();

            if (res.ok) {
                setUserName(data.userData.name);
            }
        }
        employeeFetch();
    }, []);
    return (
        <section className="mainPanel--mainWrapper">
            <h1 className="mainPanel--mainWrapper__title">
                {'Hello ' + userName + ' in your seller panel'}
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
