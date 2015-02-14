#!/usr/bin/env node
var fs = require('fs');
var argv = require('yargs')
    .usage('shnote is a simple note taking application for your command line')
    .example('$0 todo.txt clean up my apartment', 'Add a note about cleaning ' +
        'your apartment to the todo note')
    .demand(2)
    .argv;

fs.open(argv._[0], 'a+', function (err, fd) {
  fs.write(fd, argv._.slice(1).join(' '))
  fs.write(fd, '\n')
});
