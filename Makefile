SHELL := /usr/bin/env bash

start:
	docker-compose up -d

clean:
	docker-compose down --remove-orphans -v

share:
	curl $(docker port astroanimations_share_1 4040)/api/tunnels