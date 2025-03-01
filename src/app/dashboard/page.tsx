'use client';

import React, { useState } from 'react';

import Menu from 'components/Menu/Menu';
import MainPanel from 'components/MainPanel/MainPanel';
import SellTicketForm from 'components/SellForm/SellTicketForm';

export default function Dashboard() {
    const [right, setRight] = useState(0);

    const handleMenuChange = (value: number) => {
        setRight(value);
    };

    return (
        <main className="dashboard--mainWrapper">
            <Menu handleMenuChange={handleMenuChange} />
            <div className="dashboard--right">
                {right === 0 && (
                    <MainPanel handleMenuChange={handleMenuChange} />
                )}
                {right === 1 && <SellTicketForm />}
            </div>
        </main>
    );
}
