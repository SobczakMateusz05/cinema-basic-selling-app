'use client';

import React, { useState, useEffect } from 'react';

import MenuItem from 'components/Menu/MenuItem';
import Loader from 'components/Loader/Loader';

import { MenuItemParms } from '../Menu/MenuItemsParms';

interface MainPanelInterface {
    handleMenuChange: (value: number) => void;
}

export default function MainPanel({ handleMenuChange }: MainPanelInterface) {
    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function employeeFetch() {
            const res = await fetch('api/mainPanel/userRealName');

            const data = await res.json();

            if (res.ok) {
                setUserName(data.userData.name);
                setLoading(false);
            }
        }
        employeeFetch();
    }, []);

    if (loading) {
        return (
            <section className="mainPanel--mainWrapper">
                <Loader />
            </section>
        );
    }

    return (
        <section className="mainPanel--mainWrapper">
            <h1 className="title">
                {'Hello ' + userName + ' in your seller panel'}
            </h1>
            <div className="mainPanel--mainWrapper__menuItemWrapper">
                {MenuItemParms.map((itemProps) => (
                    <MenuItem
                        key={itemProps.id}
                        id={itemProps.id}
                        icon={itemProps.icon}
                        text={itemProps.text}
                        onClick={() => handleMenuChange(itemProps.id)}
                    />
                ))}
            </div>
        </section>
    );
}
