#!/bin/bash
# 发布npm
start_deploy() {
  echo "starting..."; # major、minor、patch
  
  npm run build;

  git add .;

  git commit -a -m 'ready update version';

  npm version patch;

  echo "end";
}

# 确定发布npm
read -r -p "Are You Sure? [Y/n] " input

case $input in
  [yY][eE][sS]|[yY])
  echo "YES"
  start_deploy
  ;;

  [nN][oO]|[nN])
  echo "No"
  ;;

  *)
	echo "Invalid input..."
	exit 1
	;;
esac
