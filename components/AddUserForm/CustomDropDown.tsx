'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import Arrow from 'public/common/arrow.png';

import { EmployeeInterface } from 'src/utils/forms';

interface CustomDropdownProps {
    handleSelect: (id: number | null) => void;
}

export default function CustomDropdown({ handleSelect }: CustomDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen((prev) => !prev);

    const [employees, setEmployees] = useState<EmployeeInterface[]>([]);

    const [selectedName, setSelectedName] = useState('Select an employee');

    useEffect(() => {
        async function employeeFetch() {
            const res = await fetch('api/registerForm/employeeFetch');

            const data = await res.json();

            if (res.ok) {
                setEmployees(data.employee);
            }
        }
        employeeFetch();
    }, []);

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
                src={Arrow}
                alt="arrow"
                className="loginForm--mainWrapper--inputWrapper__arrow"
            />
        </div>
    );
}
