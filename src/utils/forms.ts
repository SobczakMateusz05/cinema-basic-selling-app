export interface StatusInterface {
    isSucces: Boolean;
    message: string;
}

export interface LoginFormDataInterface {
    login: string;
    password: string;
}

export interface RegisterFormDataInterface {
    login: string;
    password: string;
    idEmployee: number | null;
}

export interface EmployeeInterface {
    id: number;
    name: string | null;
    surname: string | null;
    salary: number | null;
}

export interface SellFormInterface {
    snack: number | null;
    size: number | null;
}

export interface SellInterface {
    id: number;
    name: string;
}

export const validateField = (pattern: RegExp, value: string) => {
    return pattern.test(value);
};
