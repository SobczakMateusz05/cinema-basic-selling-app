import React from 'react';
import Link from 'next/link';

import Login from 'components/Login/Login';

export default function Home() {
    return (
        <main>
            <Login />
            <Link href="/adduser" className="addUser--destinationBtn paragraph">
                Add user
            </Link>
        </main>
    );
}
