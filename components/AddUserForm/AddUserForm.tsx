'use client';

import React, { useState, FormEvent } from 'react';
import Image from 'next/image';

import Arrow from 'public/common/arrow.png';

import {
    StatusInterface,
    validateField,
    LoginFormDataInterface,
} from '@/utils/forms';

export default function UserAddForm() {
    const [formData, setFormData] = useState<LoginFormDataInterface>({
        login: '',
        password: '',
    });
    const [status, setStatus] = useState<StatusInterface>({
        isSucces: true,
        message: '',
    });

    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    const loginPattern = /^[a-zA-Z0-9_-]{3,20}$/;

    const handleChange = (
        fieldName: string,
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const targetField = event.target;

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: targetField.value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const isValidateLogin = validateField(loginPattern, formData.login);
        const isValidatePassword = validateField(
            passwordPattern,
            formData.password
        );

        if (isValidateLogin && isValidatePassword) {
            const res = await fetch('api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus((prevState) => ({
                    ...prevState,
                    isSucces: true,
                    message: data.message,
                }));
            } else {
                setStatus((prevState) => ({
                    ...prevState,
                    isSucces: false,
                    message: data.message,
                }));
            }
        } else if (
            !formData.login ||
            !formData.password ||
            formData.login === '' ||
            formData.password === '' ||
            formData.login === null ||
            formData.password === null
        ) {
            setStatus((prevState) => ({
                ...prevState,
                isSucces: false,
                message: 'Login and password are required',
            }));
        } else {
            setStatus((prevState) => ({
                ...prevState,
                isSucces: false,
                message: "Login or password doesn't match requirements",
            }));
        }
    };

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
            <div className="loginForm--mainWrapper--inputWrapper">
                <select
                    onChange={(event) => {
                        handleChange('password', event);
                    }}
                    className="loginForm--mainWrapper--inputWrapper__input paragraph"
                    id="employee"
                >
                    <option value="-1">Choose employee</option>
                </select>
                <label
                    htmlFor="employee"
                    className="loginForm--mainWrapper--inputWrapper__label paragraph"
                >
                    Pracownik
                </label>
                <Image
                    src={Arrow}
                    alt="arrow"
                    className="loginForm--mainWrapper--inputWrapper__arrow"
                />
            </div>
            <button
                type="submit"
                onClick={(e) => handleSubmit(e)}
                className="loginForm--mainWrapper__signInBtn paragraph"
            >
                Add User
            </button>
        </form>
    );
}
