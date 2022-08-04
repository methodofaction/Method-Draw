FROM ubuntu:latest
RUN apt update
RUN apt upgrade -y
RUN apt install snapd -y
RUN apt install -y python3-pip
RUN apt install -y build-essential libssl-dev libffi-dev python3-dev
RUN apt install curl -y
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install -y python3-pip

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 8000

WORKDIR /usr/src/app/src
CMD python3 -m http.server 8000

