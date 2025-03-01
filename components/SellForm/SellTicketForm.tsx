'use client';

import React, { useState } from 'react';

import { StatusInterface } from '@/utils/forms';

export default function SellTicketForm() {
    const [status, SetStatus] = useState<StatusInterface>({
        isSucces: true,
        message: '',
    });
    return (
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
                className="sellForm--mainWrapper__button paragraph"
            >
                Sell Ticket
            </button>
        </form>
    );
}
