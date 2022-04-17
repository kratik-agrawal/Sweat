#!/bin/sh
export NODE_BINARY=node

# The project root by default is one level up from the ios directory
export PROJECT_ROOT="$PROJECT_DIR"/..

`node --print "require('path').dirname(require.resolve('react-native/package.json')) + '/scripts/react-native-xcode.sh'"`

