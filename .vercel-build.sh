#!/bin/bash

unset NODE_OPTIONS
export NODE_OPTIONS=--openssl-legacy-provider


# Run the build command
npm run build
