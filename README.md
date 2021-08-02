# GraphQL & TypeORM - API

Simple API with the support of [GraphQL](https://graphql.org/) and [TypeORM](https://typeorm.io/#/).

## Queries

-  `getSubjects` - Get the subject list.

-  `getTeachers` - Get the teacher list.

## Mutations

- `createSubject` - Create a new subject.

- `deleteSubject` - Delete a subject.

- `createTeacher` - Create a new teacher.

- `updateTeacher` - Update a teacher.

- `deleteTeacher` - Delete a teacher.

- `assignSubjectToTeacher` - Assign a subject to a teacher.

First let's set up the backend. Open de main folder of the proyect, go to backend directory and run `npm install`:

## Installation

First,  you need to install all the dependencies:

```bash
npm i
```

You need create a `.env` file and add the same variables that you can see at `.env.example`. You must set the values according to the type of database you are using. For example:

```bash
PORT=4000
DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USER=demo
DB_PASS=123456
DB_DATABASE=demo
```

> TypeORM supports multiple databases like *MySQL*, *PostgreSQL*, *MariaDB*, *SQLite*, *MS SQL Server*, *Oracle*, `SAP Hana` and *WebSQL*. 

## Run Proyect

Run the server:

```bash
npm run dev
```

Now you can go to the browser and access the path http://localhost:4000 (if this is the port you have assigned). You should be able to access the playground from which you can perform the queries or mutations you want. 

>You can find more information on the [GraphQL website](https://graphql.org/learn/).