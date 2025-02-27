import React from 'react';

import Menu from 'components/Menu/Menu';

export default function Dashboard() {
    return (
        <main className="dashboard--mainWrapper">
            <Menu />
            <div className="dashboard--right"></div>
        </main>
    );
}
