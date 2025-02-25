export interface StatusInterface {
    isSucces: Boolean;
    message: string;
}

export interface LoginFormDataInterface {
    login: string;
    password: string;
}

export const validateField = (pattern: RegExp, value: string) => {
    return pattern.test(value);
};
