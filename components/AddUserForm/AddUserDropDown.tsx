'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import ArrowWhite from 'public/common/arrow-white.png';

import { EmployeeInterface } from 'src/utils/forms';

interface CustomDropdownProps {
    handleSelect: (id: number | null) => void;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
    idEmployee: number | null;
}

export default function AddUserDropdown({
    handleSelect,
    setLoading,
    setError,
    idEmployee,
}: CustomDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen((prev) => !prev);

    const [employees, setEmployees] = useState<EmployeeInterface[]>([]);

    const [selectedName, setSelectedName] = useState('Select an employee');

    useEffect(() => {
        async function employeeFetch() {
            const res = await fetch('api/auth/employeeFetch');

            const data = await res.json();

            if (res.ok && data.status === 200) {
                setEmployees(data.employee);
                setLoading(false);
            } else {
                setError(data.message);
                setLoading(false);
            }
        }
        employeeFetch();
    }, [setError, setLoading]);

    useEffect(() => {
        if (!idEmployee) {
            setSelectedName('Select an employee');
        }
    }, [idEmployee]);

    const handleChange = (
        id: number | null,
        name: string | null,
        surname: string | null
    ) => {
        handleSelect(id);
        setSelectedName(name + ' ' + surname);
        handleOpen();
    };

    return (
        <div className="loginForm--mainWrapper--inputWrapper">
            <button
                className="loginForm--mainWrapper--inputWrapper__select paragraph"
                onClick={handleOpen}
                type="button"
            >
                <p className="loginForm--mainWrapper--inputWrapper__label paragraph">
                    Employee
                </p>
                <p className="loginForm--mainWrapper--inputWrapper__value paragraph">
                    {selectedName}
                </p>
            </button>
            {isOpen && (
                <div className="loginForm--mainWrapper--inputWrapper--dropList">
                    {employees.map((employee) => (
                        <button
                            key={employee.id}
                            className="loginForm--mainWrapper--inputWrapper--dropList__item paragraph"
                            onClick={() =>
                                handleChange(
                                    employee.id,
                                    employee.name,
                                    employee.surname
                                )
                            }
                            type="button"
                        >
                            {employee.name + ' ' + employee.surname}
                        </button>
                    ))}
                </div>
            )}
            <Image
                src={ArrowWhite}
                alt="arrow"
                className="loginForm--mainWrapper--inputWrapper__arrow"
            />
        </div>
    );
}
