FROM mhart/alpine-node

# Prepare appd dir
RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/
# COPY nodemon.json /app/

RUN npm install --production

COPY . /app/

CMD ['npm', 'start']
