# CINEMA BASIC SELLING APP

## ENGLISH

## IMPORTANT

This project will be changed to extended version in diffrent repository. This repository won't be deleted.

## Project Assumptions

This web application was created as **school project** to manage database. It very simple selling panel for each products. Application create record in special table for product in database. Database has some triggers to automatization. Created in english language (you can translate all to your own language).

## Technology Stack

### Languages

-   **HTML**
-   **CSS**
-   **TypeScript**

### Technologies

-   **NextJS**
-   **SCSS**
-   **Prisma ORM**
-   **Argon2**

### Database

-   **SQL Server (MsSql)**

## System Implementation

I recommend **Linux system**. This quide was made for **Ubuntu Server 22.04** like self-hosted solution. External platforms can be used.

1. Import database (cinema_database.sql) to your SQL Server.
2. Do steps from **database prepare** (below).
3. Create ".env" file like in **schema** (below).
4.

## ENV File Schema

DATABASE_URL="sqlserver://[ip_or_domen_of_your_database]:[port_on_which_database_work (default: 1433)];database=[database_name (cinema default)];user=[username];password=[password];trustServerCertificate=true;"
JWT_SECRET=[key_to_autorization]
NODE_ENV=development [only_if_you_use_it_to_development_needs]

## POLSKI

## WAŻNE

Ten projekt w przyszłości zostanie zmnieniony i rozwinięty w innym repozytorium. To repozytorium nie zostanie usunięte.

## Założenia Projektu

Ta aplikacja internetowa została stworzona jako **projekt szkolny** do zarządzania bazą danych. To bardzo prosty panel sprzedaży dla każdego produktu w bazie. Aplikacja tworzy rekord w specjalnej tabeli dla danego produktu w bazie danych. Baza danych ma kilka wyzwalaczy (triggerów) do automatyzacji. Stworzona w języku angielskim (można przetłumaczyć wszystko na własny język).

## Technology Stack

### Języki

-   **HTML**
-   **CSS**
-   **TypeScript**

### Technologie

-   **NextJS**
-   **SCSS**
-   **Prisma ORM**
-   **Argon2**

### Baza danych

-   **SQL Server (MsSql)**

## Implementacja Systemu

Polecam **system Linux**. Ten poradnik został stworzony dla **Ubuntu Server 22.04** jako rozwiązanie własnego hostowania. Można użyć też zewnętrzych platform.

1. Zaimportuj baze danych (cinema_database.sql) do twojego SQL Server.
2. Wykonaj kroki z **przygotowanie bazy danych** (poniżej).

## Przygotowanie Bazy Danych

## Schemat Pliku ENV

DATABASE_URL="sqlserver://[ip_or_domen_of_your_database]:[port_on_which_database_work (default: 1433)];database=[database_name (cinema default)];user=[username];password=[password];trustServerCertificate=true;"
JWT_SECRET=[key_to_autorization]
NODE_ENV=development [only_if_you_use_it_to_development_needs]
