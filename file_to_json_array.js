var fs = require('fs');
var program = require('commander');

program
  .version('0.0.1')
  .option('-f, --file <filepath>', 'Path to file with lines to convert to JSON array')
  .parse(process.argv);

if (program.file) {
  var array = fs.readFileSync(program.file).toString().split("\n");
  array = array.filter(function (n) { return n; });
  console.log(JSON.stringify(array));
}
