README

npm install -g expo-cli

expo init daniel-babin-firebase-02

Choose Blank Template

Name File & Slug

cd daniel-babin-firebase-02

npm install firebase

go to node_modules/metro-confi/src/defaults/blacklist.js and add \'s to line 15:
/node_modules[/\\]react[/\\]dist[/\\].*/,

This should be the result: 
/node_modules[\/\\]react[\/\\]dist[\/\\].*/,

**Metro Bundle will not run properly without it for me.



