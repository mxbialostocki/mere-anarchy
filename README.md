# mere-anarchy
Django / React boilerplate

## map
Django app
-[] hello-world == render basic entry point
-[] django auth, google auth, facebook auth
-[] default postgres db for CRUD with book records (as example)
    1. records database
    3. users database I uuid
    4. users database II user info
-[] 

React Frontend
-[] Node entry talking to Django
-[] React Framework
-[] Material-UI Library 
-[] GraphQl to manage all API requests

Dockerise this whole thing:
Container 1. Django App User
Container 2. Node App
Container 3. Postgres Instances

## usage
Create an env.json for environment variables:
{
    "DJANGO_SECRET_KEY": "<your-secret-key>",
    "DATABASE_ENGINE": "django.db.backends.postgresql_psycopg2",
    "DATABASE_NAME": "<DB_NAME>",
    "DATABASE_USER": "<DB_USER>",
    "DATABASE_PASSWORD": "<DB_PASSWORD">,
    "DATABASE_HOST": "<DB_HOST>",
    "DATABASE_PORT": <PORT>
}

You'll need postgres installed, and to:
1. Create the database with `create database <NAME>;`
2. Create a role for the database with `create role <ROLE>;`
3. Give that role lgoin permissions `alter role "<ROLE>" with login;`

Then you can run the default migration:
```python manage.py makemigrations kali```
```python manage.py migrate```

## coverage
```coverage run --source='.' manage.py test```
```coverage html```
```coverage report```