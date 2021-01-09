FROM python:3.9

ARG DEBUG
ARG SECRET_KEY

ENV DEBUG $DEBUG
ENV SECRET_KEY $SECRET_KEY

WORKDIR /Useriko
COPY requirements.txt /Useriko
RUN pip install -r requirements.txt

COPY . /Useriko/

RUN python manage.py makemigrations
RUN python manage.py migrate