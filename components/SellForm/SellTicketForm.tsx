'use client';

import React, { useState, FormEvent } from 'react';

import { BlackLoader, ButtonWhiteLoader } from 'components/Loader/Loader';

import { StatusInterface } from '@/utils/forms';

export default function SellTicketForm() {
    const [status, SetStatus] = useState<StatusInterface>({
        isSucces: true,
        message: '',
    });
    const [loading, setLoading] = useState(true);
    const [buttonLoading, setButtonLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setButtonLoading(!buttonLoading);
    };

    return (
        <div>
            <form className="sellForm--mainWrapper">
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
                <button
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                    className={`loginForm--mainWrapper__button paragraph ${
                        buttonLoading
                            ? 'loginForm--mainWrapper__button__disabled'
                            : ''
                    }`}
                    disabled={buttonLoading}
                >
                    {!buttonLoading ? 'Sell Snack' : <ButtonWhiteLoader />}
                </button>
            </form>
        </div>
    );
}
