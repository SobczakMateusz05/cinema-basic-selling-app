'use client';

import React, { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';

import MenuItem from 'components/Menu/MenuItem';
import { BlackLoader } from 'components/Loader/Loader';

import { MenuItemParms } from '../Menu/MenuItemsParms';

interface MainPanelInterface {
    handleMenuChange: (value: number) => void;
}

export default function MainPanel({ handleMenuChange }: MainPanelInterface) {
    const [userName, setUserName] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function employeeFetch() {
            const res = await fetch('api/mainPanel/userRealName');

            const data = await res.json();

            if (res.status === 401) {
                localStorage.setItem('loggedOut', 'true');
                redirect('/');
            }

            if (res.ok && data.status === 200) {
                setUserName(data.userData.name);
                setLoading(false);
            } else {
                setError(data.message);
                setLoading(false);
            }
        }
        employeeFetch();
    }, []);

    if (loading) {
        return (
            <section className="mainPanel--mainWrapper">
                <BlackLoader />
            </section>
        );
    }

    if (error) {
        return (
            <section className="mainPanel--mainWrapper">
                <h1 className="title mainPanel--mainWrapper__error">{error}</h1>
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
