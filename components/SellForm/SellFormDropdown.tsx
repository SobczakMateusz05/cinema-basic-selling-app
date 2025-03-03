'use client';

import React, { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';
import Image from 'next/image';

import ArrowBlack from 'public/common/arrow-black.png';
import { SellInterface } from 'src/utils/forms';

export interface CustomDropdownInterface {
    handleSelect: (id: number | null, fieldName: string) => void;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
    apiLocation: string;
    item: string;
}

export default function SellFormDropdown({
    handleSelect,
    setLoading,
    setError,
    apiLocation,
    item,
}: CustomDropdownInterface) {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState<SellInterface[]>([]);
    const [selected, setSelected] = useState<string | null>('Choose option');

    const handleOpen = () => setIsOpen(!isOpen);

    const handleChange = (id: number | null, name: string | null) => {
        handleSelect(id, item);
        setSelected(name);
        handleOpen();
    };

    useEffect(() => {
        async function sellFetch() {
            const res = await fetch(apiLocation);

            const data = await res.json();

            if (res.status === 401) {
                localStorage.setItem('loggedOut', 'true');
                redirect('/');
            }

            if (res.ok && data.status === 200) {
                setData(data.sell);
                setLoading(false);
            } else {
                setError(data.message);
                setLoading(false);
            }
        }
        sellFetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="sellForm--mainWrapper--inputWrapper">
            <button
                className="sellForm--mainWrapper--inputWrapper__select paragraph"
                onClick={handleOpen}
                type="button"
            >
                <p className="sellForm--mainWrapper--inputWrapper__label paragraph">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                </p>
                <p className="sellForm--mainWrapper--inputWrapper__value paragraph">
                    {selected}
                </p>
            </button>
            {isOpen && (
                <div className="sellForm--mainWrapper--inputWrapper--dropList">
                    {data.map((data) => (
                        <button
                            key={data.id}
                            className="sellForm--mainWrapper--inputWrapper--dropList__item paragraph"
                            onClick={(event) =>
                                handleChange(
                                    data.id,
                                    (event.target as HTMLButtonElement)
                                        .innerText
                                )
                            }
                            type="button"
                        >
                            {data.film && data.date
                                ? data.film.title +
                                  ' (' +
                                  data.date.slice(0, 10) +
                                  ')'
                                : data.name}
                        </button>
                    ))}
                </div>
            )}
            <Image
                src={ArrowBlack}
                alt="arrow"
                className="sellForm--mainWrapper--inputWrapper__arrow"
            />
        </div>
    );
}
