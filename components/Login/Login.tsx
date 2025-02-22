import React from 'react';
import Image from 'next/image';

import Logo from 'public/common/logo.png';

import LoginForm from './LoginForm';

export default function Login() {
    return (
        <section className="login--mainWrapper">
            <Image
                src={Logo}
                alt="cinema logo"
                className="login--mainWrapper__logoImage"
            />
            <LoginForm />
        </section>
    );
}
