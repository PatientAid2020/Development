FROM python:3.7.6

RUN pip install --upgrade pip

RUN pip install pipenv

WORKDIR /app

COPY Pipfile* /app/

ENV PIPENV_VENV_IN_PROJECT=1

RUN pipenv install

CMD ["pipenv", "run", "python", "server/main.py"]
