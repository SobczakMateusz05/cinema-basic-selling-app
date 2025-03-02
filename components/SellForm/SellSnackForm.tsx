'use client';

import React, { useState, FormEvent } from 'react';

import { BlackLoader, ButtonWhiteLoader } from 'components/Loader/Loader';
import { SellFormInterface, StatusInterface } from 'src/utils/forms';
import SellFormDropdown from './SellFormDropdown';

export default function SellSnackForm() {
    const [status, setStatus] = useState<StatusInterface>({
        isSucces: true,
        message: '',
    });
    const [loading, setLoading] = useState(true);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [formData, setFormData] = useState<SellFormInterface>({
        snack: null,
        size: null,
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
        setButtonLoading(!buttonLoading);

        if (formData.snack && formData.size) {
            const res = await fetch('api/sellForm/sellSnack', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

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
        } else {
            setStatus((prevState) => ({
                ...prevState,
                isSucces: false,
                message: 'Snack and/or size are not selected',
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
                <h1 className="title">Sell Snack</h1>
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
                        apiLocation="api/sellForm/sellSnackFetch"
                        item="snack"
                    />
                </div>
                <div className="sellForm--mainWrapper--inputWrapper">
                    <SellFormDropdown
                        handleSelect={handleSelect}
                        setLoading={setLoading}
                        setError={setError}
                        apiLocation="api/sellForm/sellSnackSizeFetch"
                        item="size"
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
                    {!buttonLoading ? 'Sell Snack' : <ButtonWhiteLoader />}
                </button>
            </form>
            <div className={!loading ? 'disable' : ''}>
                <BlackLoader />
            </div>
        </div>
    );
}
