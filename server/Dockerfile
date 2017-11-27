FROM mhart/alpine-node

# Prepare appd dir
RUN mkdir -p /app
WORKDIR /app

COPY package.json ./
# COPY nodemon.json /app/

COPY . ./
RUN npm install --production
CMD ['npm', 'start']
