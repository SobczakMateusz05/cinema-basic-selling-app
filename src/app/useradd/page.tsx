import React from 'react';
import UserAddForm from 'components/UserAddForm/UserAddForm';

export default function UserAdd() {
    return (
        <main className="login--mainWrapper">
            <UserAddForm />
            <div className="userAdd--requirment">
                <p className="paragraph userAdd--requirment__title">Login:</p>
                <ul className="userAdd--requirment__conditions">
                    <li className="paragraph">
                        Allowed characters is:
                        <ul className="userAdd--requirment__subconditions">
                            <li className="paragraph">
                                Lowercase and uppercase letters
                            </li>
                            <li className="paragraph">Numbers</li>
                            <li className="paragraph">Dashes andunderscores</li>
                        </ul>
                    </li>
                    <li className="paragraph">
                        length from 3 to 20 characters
                    </li>
                </ul>
                <p className="paragraph userAdd--requirment__title">
                    Password:
                </p>
                <ul className="userAdd--requirment__conditions">
                    <li className="paragraph ">
                        At least one lowercase letter
                    </li>
                    <li className="paragraph ">At least one upercase letter</li>
                    <li className="paragraph">At least one number</li>
                    <li className="paragraph">
                        {' '}
                        At least one special character (!@#$%^&*)
                    </li>
                    <li className="paragraph">At least 8 characters</li>
                </ul>
            </div>
        </main>
    );
}
