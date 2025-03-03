'use client';

import React, { useState } from 'react';

import Menu from 'components/Menu/Menu';
import MainPanel from 'components/MainPanel/MainPanel';
import SellTicketForm from 'components/SellForm/SellTicketForm';
import SellSnackForm from 'components/SellForm/SellSnackForm';
import SellGlassesForm from 'components/SellForm/SellGlassesForm.';

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
                {right === 2 && <SellSnackForm />}
                {right === 3 && <SellGlassesForm />}
            </div>
        </main>
    );
}
