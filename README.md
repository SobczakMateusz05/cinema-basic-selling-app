<h1 align="center"> CINEMA BASIC SELLING APP </h1> <br>

Uicons by [Flaicon](https://www.flaticon.com/uicons)

## **IMPORTANT**

This project will be changed to extended version in diffrent repository. This repository won't be deleted.

## Table of Contents

-   [Project Assumptions](#project-assumptions)
-   [Technology Stacl](#technology-stack)
    -   [Languages](#languages)
    -   [Technologies](#technologies)
    -   [Database](#database)
-   [System Implementation](#system-implementation)
-   [Database Prepare](#database-prepare)
-   [ENV File Schema](#env-file-schema)
-   [Production Without HTTPS](#production-without-https)
-   [Gallery](#gallery)

## Project Assumptions

This web application was created as **school project** to manage database. It very simple selling panel for each products. Application create record in special table for product in database. Database has some triggers to automatization. Created in english language (you can translate all to your own language). Appication isn't responsive for phones (read [important](#important)).

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
2. Do steps from [database prepare](#database-prepare) (below).
3. On your server use this command to update system:

    ```
    $ sudo apt update && sudo apt upgrade -y
    ```

4. Next install node.js and npm by 3 commands:
    ```
    $ curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash`
    $ source ~/.bashrc
    $ nvm install --lts
    ```
5. Install PM2 (process manager for running applications) using:

    ```
    $ npm install -g pm2
    ```

6. Clone repository to your system (you can remove readme.md and cinema_database.sql) by:
    ```
    $ git clone https://github.com/SobczakMateusz05/cinema-basic-selling-app
    ```
7. Move to app files using:

    ```
    $ cd cinema-basic-selling-app
    ```

8. Install all dependence:
    ```
    $ npm install
    ```
9. Build the app by:
    ```
    $ npm run build
    ```
10. After build test connection using:

    ```
    $ npm start
    ```

11. connect by web browser typing `[your_server_ip_address]:3000` (**it will not work** because you don't have env)

12. Configure automatic start with PM2 by this commands:

    ```
    $ pm2 start npm --name "[name_of_app_which_you_want]" -- start
    $ pm2 save
    $ pm2 startup
    ```

13. Create ecosystem.config.js to use environment variables by: `nano ecosystem.config.js` and paste configuration, **add values to varaibles** (schema in [ENV File Schema](#env-file-schema)):

    ```
    module.exports = {
        apps: [
            {
                name: "[name_of_app_which_you_choosed]",
                script: "npm",
                args: "start",
                env: {
                    NODE_ENV: "[value]",
                    DATABASE_URL: "[value]",
                    JWT_SECRET: "[value]"
                }
            }
        ]
    };

    ```

14. Use this commands to activate configuration:

    ```
    $ pm2 start ecosystem.config.js
    $ pm2 save
    $ pm2 restart next-app
    ```

15. To make sure environment variables work build a app again by:

    ```
    $ npm run build
    ```

## Database Prepare

Because it very simple and for school needs there no any admin panel or something like this (read [important](#important) and [Project Assumptions](#project-assumptions) ). You have to prepare database yourself.

In database you have to add values to employees, snack, snack_size, glasses_3d, film, room, showing.
Users you can add in login menu on right top button.

## ENV File Schema

DATABASE_URL="sqlserver://[ip_or_domen_of_your_database]:[port_on_which_database_work (default: 1433)];database=[database_name (cinema default)];user=[username];password=[password];trustServerCertificate=true;"
JWT_SECRET=[key_to_autorization]
NODE_ENV=[development/production (production when you have HTTPS, NODE_ENV is automatic set to production if you use `npm run start`, if you don't have HTTPS and still want to host app read [Production Without HTTPS](#production-without-https))]

## Production Without HTTPS

If you want to use production hosting for your application but don't have HTTPS (**not recommended**), it's possible but you need to change 2 places in the code. The first change is in the `src/app/api/logout/route.ts` file on line 12, you need to change `process.env.NODE_ENV === 'production'` to `false`. The second change is in the `src/app/api/login/route.ts` file on line 60, you need to change `process.env.NODE_ENV === 'production'` to `false`. After making these changes, the application will work correctly. **If you add HTTPS in the future, you need to revert the changes!**

## Gallery

<img alt="Login screen" title="Login screen" src="http://imgur.com/GUAUAIL.png" width="400"> &nbsp; &nbsp; <img alt="Add user screen" title="Add user screen" src="http://imgur.com/d81nK4O.png" width="400">
<br><br>
<img alt="Main dashboard screen" title="Main dashboard screen" src="http://imgur.com/YOmViiD.png" width="400"> &nbsp; &nbsp; <img alt="Sell ticket dashboard screen" title="Sell ticket dashboard screen" src="http://imgur.com/aMbRlHn.png" width="400">
<br><br>
<img alt="Sell snack dashboard screen" title="Sell snack dashboard screen" src="http://imgur.com/zzbzC5a.png" width="400"> &nbsp; &nbsp; <img alt="Sell glasses dashboard screen" title="Sell glasses dashboard screen" src="http://imgur.com/QEuWoNZ.png" width="400">
