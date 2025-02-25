import React from 'react';
import Link from 'next/link';

import AddUserForm from 'components/AddUserForm/AddUserForm';
import AddUserRequirment from 'components/AddUserRequirment/AddUserRequirment';

export default function UserAdd() {
    return (
        <main className="login--mainWrapper">
            <AddUserForm />
            <AddUserRequirment />
            <Link href="/" className="addUser--destinationBtn paragraph">
                Main Site
            </Link>
        </main>
    );
}
