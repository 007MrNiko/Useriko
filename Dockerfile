FROM python:3.9

ARG DEBUG
ARG SECRET_KEY

ENV DEBUG $DEBUG
ENV SECRET_KEY $SECRET_KEY

RUN mkdir /Useriko
WORKDIR /Useriko
COPY requirements.txt /Useriko
RUN pip install -r requirements.txt

EXPOSE 8006

COPY . /Useriko/

RUN python manage.py makemigrations
RUN python manage.py migrate

CMD ["python", "manage.py", "runserver", "localhost:8006"]