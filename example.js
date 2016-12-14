var mdi = require('./mdi.js');

for (var i = new mdi.MDI(3,2); i.con(); i.inc()){
	console.log(i.arr);
}

// is equivalent to //

for (var i = 0; i < 3; i++) {
	for (var j = 0; j < 3; j++) {
		console.log([j,i]);
	}
}