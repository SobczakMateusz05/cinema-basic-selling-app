'use client';

import React, { useState, FormEvent } from 'react';
import { redirect } from 'next/navigation';

import { BlackLoader, ButtonWhiteLoader } from 'components/Loader/Loader';

import {
    StatusInterface,
    SellTicketFormInterface,
    validateField,
} from '@/utils/forms';
import SellFormDropdown from './SellFormDropdown';

export default function SellTicketForm() {
    const [status, setStatus] = useState<StatusInterface>({
        isSucces: true,
        message: '',
    });
    const [loading, setLoading] = useState(true);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState<SellTicketFormInterface>({
        name: '',
        surname: '',
        email: '',
        showing: null,
    });

    const namePattern =
        /^[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż'-]{2,50}(?: [A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż'-]{2,50})?$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleSelect = (id: number | null, fieldName: string) => {
        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: id,
        }));
    };

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
        setButtonLoading(!buttonLoading);

        const nameValidate = validateField(namePattern, formData.name);
        const surnameValidate = validateField(namePattern, formData.surname);
        const emailValidate = validateField(emailPattern, formData.email);

        if (
            nameValidate &&
            surnameValidate &&
            emailValidate &&
            formData.showing
        ) {
            const res = await fetch('api/sellForm/sellTicket', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();

            if (res.status === 401) {
                localStorage.setItem('loggedOut', 'true');
                redirect('/');
            }

            if (res.ok && data.status === 200) {
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
        } else if (!formData.showing) {
            setStatus((prevState) => ({
                ...prevState,
                isSucces: false,
                message: 'Showing is not selected',
            }));
        } else if (!emailValidate) {
            setStatus((prevState) => ({
                ...prevState,
                isSucces: false,
                message: 'E-mail is wrong',
            }));
        } else {
            setStatus((prevState) => ({
                ...prevState,
                isSucces: false,
                message: 'Name and/or surname is wrong',
            }));
        }

        setButtonLoading((prev) => !prev);
    };

    if (error) {
        return (
            <h1 className="title sellForm--mainWrapper__message__error">
                {error}
            </h1>
        );
    }

    return (
        <div>
            <form
                className={`sellForm--mainWrapper ${loading ? 'disable' : ''}`}
            >
                <h1 className="title">Sell Ticket</h1>
                <p
                    className={`sellForm--mainWrapper__message paragraph ${
                        !status.isSucces
                            ? 'sellForm--mainWrapper__message__error'
                            : ''
                    }`}
                >
                    {status.message}
                </p>
                <div className="sellForm--mainWrapper--inputWrapper">
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(event) => {
                            handleChange('name', event);
                        }}
                        className="sellForm--mainWrapper--inputWrapper__input"
                        id="name"
                    />
                    <label
                        htmlFor="name"
                        className="sellForm--mainWrapper--inputWrapper__label paragraph"
                    >
                        Name
                    </label>
                </div>
                <div className="sellForm--mainWrapper--inputWrapper">
                    <input
                        type="text"
                        value={formData.surname}
                        onChange={(event) => {
                            handleChange('surname', event);
                        }}
                        className="sellForm--mainWrapper--inputWrapper__input"
                        id="surname"
                    />
                    <label
                        htmlFor="surname"
                        className="sellForm--mainWrapper--inputWrapper__label paragraph"
                    >
                        Surname
                    </label>
                </div>
                <div className="sellForm--mainWrapper--inputWrapper">
                    <input
                        type="text"
                        value={formData.email}
                        onChange={(event) => {
                            handleChange('email', event);
                        }}
                        className="sellForm--mainWrapper--inputWrapper__input"
                        id="email"
                    />
                    <label
                        htmlFor="email"
                        className="sellForm--mainWrapper--inputWrapper__label paragraph"
                    >
                        Email
                    </label>
                </div>
                <div className="sellForm--mainWrapper--inputWrapper">
                    <SellFormDropdown
                        handleSelect={handleSelect}
                        setLoading={setLoading}
                        setError={setError}
                        apiLocation="api/sellForm/showingFetch"
                        item="showing"
                    />
                </div>
                <button
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                    className={`sellForm--mainWrapper__button paragraph ${
                        buttonLoading
                            ? 'sellForm--mainWrapper__button__disabled'
                            : ''
                    }`}
                    disabled={buttonLoading}
                >
                    {!buttonLoading ? 'Sell Ticket' : <ButtonWhiteLoader />}
                </button>
            </form>
            <div className={!loading ? 'disable' : ''}>
                <BlackLoader />
            </div>
        </div>
    );
}
