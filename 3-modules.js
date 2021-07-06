//Modules
// Every file in node is a module
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-exporting');
require('./7-mind-grenade');


sayHi(names.Johny);
sayHi(names.Susan);
sayHi(names.peter);
