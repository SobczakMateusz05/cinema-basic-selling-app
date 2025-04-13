'use client';

import React, { useState, FormEvent } from 'react';
import { redirect } from 'next/navigation';

import { BlackLoader, ButtonWhiteLoader } from 'components/Loader/Loader';
import { SellGlassesFormInterface, StatusInterface } from 'src/utils/forms';
import SellFormDropdown from './SellFormDropdown';

export default function SellGlassesForm() {
    const [status, setStatus] = useState<StatusInterface>({
        isSucces: true,
        message: '',
    });
    const [loading, setLoading] = useState(true);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [formData, setFormData] = useState<SellGlassesFormInterface>({
        glasses: null,
    });
    const [error, setError] = useState<string | null>(null);

    const handleSelect = (id: number | null, fieldName: string) => {
        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: id,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus(() => ({
            isSucces: true,
            message: '',
        }));
        setButtonLoading(!buttonLoading);

        if (formData) {
            const res = await fetch('api/sellForm/sellGlasses', {
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
                setStatus(() => ({
                    isSucces: true,
                    message: data.message,
                }));
                setFormData(() => ({
                    glasses: null,
                }));
            } else {
                setStatus(() => ({
                    isSucces: false,
                    message: data.message,
                }));
            }
        } else {
            setStatus(() => ({
                isSucces: false,
                message: 'Glasses are not selected',
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
                <h1 className="title">Sell Glasses</h1>
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
                    <SellFormDropdown
                        handleSelect={handleSelect}
                        setLoading={setLoading}
                        setError={setError}
                        apiLocation="api/sellForm/sellGlasses"
                        item="glasses"
                        value={formData.glasses}
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
                    {!buttonLoading ? 'Sell Glasses' : <ButtonWhiteLoader />}
                </button>
            </form>
            <div className={!loading ? 'disable' : ''}>
                <BlackLoader />
            </div>
        </div>
    );
}
