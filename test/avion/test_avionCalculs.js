const calculs = require('../../avion/avionCalculs.js'); // require the file you want to test
const expect = require('chai').expect; // import other elements of Chai if needed, for example `assert`

describe('Calculs avion', function () {
	it('should to something', function() { // change the name accordingly to what you want to test
		let response = ...; // call the function you want to test, with the params
		expect(...); // what did you expect?
		// or use assert.equal() for example
	});
});
