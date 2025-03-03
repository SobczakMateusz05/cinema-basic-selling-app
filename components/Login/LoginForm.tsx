'use client';

import React, { useState, FormEvent, useEffect } from 'react';

import { StatusInterface, LoginFormDataInterface } from '@/utils/forms';
import { redirect } from 'next/navigation';
import { ButtonBlackLoader } from 'components/Loader/Loader';

export default function LoginForm() {
    const [formData, setFormData] = useState<LoginFormDataInterface>({
        login: '',
        password: '',
    });
    const [status, setStatus] = useState<StatusInterface>({
        isSucces: true,
        message: '',
    });

    const [buttonLoading, setButtonLoading] = useState(false);

    const handleChange = (
        fieldName: string,
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const targetField = event.target;

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: targetField.value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus((prevState) => ({
            ...prevState,
            isSucces: true,
            message: '',
        }));
        setButtonLoading(true);

        if (formData.login !== '' && formData.password !== '') {
            const res = await fetch('api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                credentials: 'include',
            });

            const data = await res.json();

            if (res.ok && data.status === 200) {
                redirect('/dashboard');
            } else {
                setStatus((prevState) => ({
                    ...prevState,
                    message: data.message,
                    isSucces: false,
                }));
            }
        } else {
            setStatus((prevState) => ({
                ...prevState,
                isSucces: false,
                message: 'Login and password are required',
            }));
        }
        setButtonLoading(false);
    };

    useEffect(() => {
        const loggedOut = localStorage.getItem('loggedOut');

        if (loggedOut) {
            setStatus((prevState) => ({
                ...prevState,
                isSucces: false,
                message: 'Loged out! You have to log in again',
            }));
            localStorage.removeItem('loggedOut');
        }
    }, []);

    return (
        <form className="loginForm--mainWrapper">
            <p
                className={`loginForm--mainWrapper__message paragraph ${
                    !status.isSucces
                        ? 'loginForm--mainWrapper__message__error'
                        : ''
                }`}
            >
                {status.message}
            </p>
            <div className="loginForm--mainWrapper--inputWrapper">
                <input
                    type="text"
                    onChange={(event) => {
                        handleChange('login', event);
                    }}
                    className="loginForm--mainWrapper--inputWrapper__input paragraph"
                    id="login"
                />
                <label
                    htmlFor="login"
                    className="loginForm--mainWrapper--inputWrapper__label paragraph"
                >
                    Login
                </label>
            </div>
            <div className="loginForm--mainWrapper--inputWrapper">
                <input
                    type="password"
                    onChange={(event) => {
                        handleChange('password', event);
                    }}
                    className="loginForm--mainWrapper--inputWrapper__input paragraph"
                    id="password"
                />
                <label
                    htmlFor="password"
                    className="loginForm--mainWrapper--inputWrapper__label paragraph"
                >
                    Password
                </label>
            </div>
            <button
                type="submit"
                onClick={(e) => handleSubmit(e)}
                className={`loginForm--mainWrapper__signInBtn paragraph ${
                    buttonLoading
                        ? 'loginForm--mainWrapper__signInBtn__disabled'
                        : ''
                }`}
                disabled={buttonLoading}
            >
                {!buttonLoading ? 'Sign in' : <ButtonBlackLoader />}
            </button>
        </form>
    );
}
