'use client';

import React, { useState, FormEvent } from 'react';

import {
    StatusInterface,
    validateField,
    RegisterFormDataInterface,
} from '@/utils/forms';

import { WhiteLoader, ButtonBlackLoader } from 'components/Loader/Loader';
import AddUserDropDown from './AddUserDropDown';

export default function UserAddForm() {
    const [formData, setFormData] = useState<RegisterFormDataInterface>({
        login: '',
        password: '',
        idEmployee: null,
    });
    const [status, setStatus] = useState<StatusInterface>({
        isSucces: true,
        message: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [buttonLoading, setButtonLoading] = useState(false);

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

    const handleSelect = (id: number | null) => {
        setFormData((prevState) => ({
            ...prevState,
            idEmployee: id,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setButtonLoading(true);

        const isValidateLogin = validateField(loginPattern, formData.login);
        const isValidatePassword = validateField(
            passwordPattern,
            formData.password
        );

        if (isValidateLogin && isValidatePassword) {
            if (formData.idEmployee) {
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
            } else {
                setStatus((prevState) => ({
                    ...prevState,
                    isSucces: false,
                    message: 'Employee not selected',
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
        setButtonLoading(false);
    };

    if (error) {
        return <h1 className="title loginForm__error">{error}</h1>;
    }

    return (
        <div>
            <form
                className={`loginForm--mainWrapper ${loading ? 'disable' : ''}`}
            >
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
                        value={formData.login}
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
                        value={formData.password}
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
                <AddUserDropDown
                    handleSelect={handleSelect}
                    setLoading={setLoading}
                    setError={setError}
                />
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
                    {!buttonLoading ? 'Add User' : <ButtonBlackLoader />}
                </button>
            </form>
            <div className={!loading ? 'disable' : ''}>
                <WhiteLoader />
            </div>
        </div>
    );
}
