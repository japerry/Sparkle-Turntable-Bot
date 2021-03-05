# Use a stock Docksal image as the base
FROM docksal/cli:2.11.0-php7.3

# nvm/node/npm are only available in the docker user context
USER docker

# Install additional global npm dependencies
RUN set -e; \
	# Initialize the user environment (this loads nvm)
	. $HOME/.profile; \
	# Install the necessary nodejs version
	nvm install node 14; \
	npm install -g npm@7.6.1; \
	# Install packages
	npm install -g nodemon;

# Always switch back to root in the end
USER root