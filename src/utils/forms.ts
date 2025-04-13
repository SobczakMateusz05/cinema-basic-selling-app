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

export interface SellSnackFormInterface {
    snack: number | null;
    size: number | null;
}

export interface SellGlassesFormInterface {
    glasses: number | null;
}

export interface SellInterface {
    id: number;
    name: string;
    date: string | null;
    film: { title: string } | null;
}

export interface SellTicketFormInterface {
    name: string;
    surname: string;
    email: string;
    showing: number | null;
}

export interface InformationInterface {
    room: number | null;
    seats: number | null;
}

interface FilmInterface {
    id: number;
    premiere: string;
    ticket: number;
    title: string;
}

export interface ShowingInformationInterface {
    find(
        arg0: (item: ShowingInformationInterface) => boolean
    ): ShowingInformationInterface;
    available_seats: number;
    date: string;
    film: FilmInterface;
    id: number;
    id_film: number;
    room_number: number;
}

export const validateField = (pattern: RegExp, value: string) => {
    return pattern.test(value);
};
