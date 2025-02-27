import React from 'react';

import Menu from 'components/Menu/Menu';
import MainPanel from 'components/MainPanel/MainPanel';

export default function Dashboard() {
    return (
        <main className="dashboard--mainWrapper">
            <Menu />
            <div className="dashboard--right">
                <MainPanel />
            </div>
        </main>
    );
}
