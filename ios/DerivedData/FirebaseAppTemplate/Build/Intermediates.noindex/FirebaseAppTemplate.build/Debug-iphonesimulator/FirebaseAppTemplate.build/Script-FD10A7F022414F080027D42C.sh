#!/bin/sh
export RCT_METRO_PORT="${RCT_METRO_PORT:=8081}"
echo "export RCT_METRO_PORT=${RCT_METRO_PORT}" > `node --print "require('path').dirname(require.resolve('react-native/package.json')) + '/scripts/.packager.env'"`
if [ -z "${RCT_NO_LAUNCH_PACKAGER+xxx}" ] ; then
  if nc -w 5 -z localhost ${RCT_METRO_PORT} ; then
    if ! curl -s "http://localhost:${RCT_METRO_PORT}/status" | grep -q "packager-status:running" ; then
      echo "Port ${RCT_METRO_PORT} already in use, packager is either not running or not running correctly"
      exit 2
    fi
  else
    open `node --print "require('path').dirname(require.resolve('react-native/package.json')) + '/scripts/launchPackager.command'"` || echo "Can't start packager automatically"
  fi
fi

