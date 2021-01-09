# Useriko
Download or clone project to your computer.
After that, make sure you have installed Docker v3.0 and higher, or
if you have other version change its version in docker-compose.yml
```
version: "3.0" <- here

...
```

## Running
Open terminal in project root folder and enter that commands
1. `docker-compose build`
2. `docker-compose up`
3. There should now be two servers running:
  - [http://127.0.0.1:8006](http://127.0.0.1:5000) is the Django app
  - [http://127.0.0.1:3000](http://127.0.0.1:3000) is the React app

## Technologies
- Languages: Python, JavaScript, HTML, CSS
- Frameworks:
    - Backend: Django with REST
    - Frontend: React
- Database: SQLite
- Virtualization: Docker