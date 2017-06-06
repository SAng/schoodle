# Schoodle Project

Schoodle is a simple Doodle clone. Use Schoodle to find a convenient time to for a group to meet.

Schoodle is built with HTML, CSS, Bootstrap, JS, jQuery, Ajax on the client-side and Node, Express and Knex on the server-side.

## Final Product

!["Home Page"](https://github.com/boomerandzapper/schoodle/blob/master/docs/index.png?raw=true)
!["Fill in Event Details"](https://github.com/boomerandzapper/schoodle/blob/master/docs/longurl.png?raw=true)
!["Choose your availability"](https://github.com/boomerandzapper/schoodle/blob/master/docs/mainpage.png?raw=true)

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Create a .env file and fill out with:
        DB_HOST=localhost
        DB_USER=
        DB_PASS=
        DB_NAME=
        DB_SSL=
        DB_PORT=
4. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
5. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Body-Parser
- Dotenv
- EJS
- Express
- Knex
- Knex-logger
- Morgan
- Node-sass-middleware
- Nodemon
- Node
- PG
