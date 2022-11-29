# Development

FROM node:18

ENV APP=/code
WORKDIR $APP

# Install node modules
RUN mkdir -p $APP/node_modules
COPY package*.json $APP/
RUN npm config set depth=0 && npm install
COPY . $APP
RUN chown node:node -R $APP
USER node

# Copy .env files
RUN cp local.env .env
RUN cp local.okta.env .okta.env

EXPOSE 8080

# Start the server
CMD ["npm", "run", "dev"]