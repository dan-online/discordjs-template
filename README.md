# Discord Bot Template Creator!
![](https://img.shields.io/appveyor/ci/MayorChano/discordjs-template.svg)
# What is this?
This module creates a Discord.js template for you with your settings!
# How to run!
Make a file like ``start.js`` and run this code with node to create the files. You only need to run this code once.
```
const run = require("discordjs-template");
run.start(token, name, color, owner, prefix)
```