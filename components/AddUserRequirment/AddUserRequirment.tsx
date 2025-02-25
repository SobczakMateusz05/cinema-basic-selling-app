import React from 'react';

export default function AddUserRequirment() {
    return (
        <div className="addUser--requirment">
            <p className="paragraph addUser--requirment__title">Login:</p>
            <ul className="addUser--requirment__conditions">
                <li className="paragraph">
                    Allowed characters is:
                    <ul className="addUser--requirment__subconditions">
                        <li className="paragraph">
                            Lowercase and uppercase letters
                        </li>
                        <li className="paragraph">Numbers</li>
                        <li className="paragraph">Dashes andunderscores</li>
                    </ul>
                </li>
                <li className="paragraph">length from 3 to 20 characters</li>
            </ul>
            <p className="paragraph addUser--requirment__title">Password:</p>
            <ul className="addUser--requirment__conditions">
                <li className="paragraph ">At least one lowercase letter</li>
                <li className="paragraph ">At least one upercase letter</li>
                <li className="paragraph">At least one number</li>
                <li className="paragraph">
                    {' '}
                    At least one special character (!@#$%^&*)
                </li>
                <li className="paragraph">At least 8 characters</li>
            </ul>
        </div>
    );
}
