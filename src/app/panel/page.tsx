import React from 'react';

import Menu from 'components/Menu/Menu';

export default function Panel() {
    return (
        <main className="panel--mainWrapper">
            <Menu />
            <div className="panel--right"></div>
        </main>
    );
}
