const geometrie = require('../../cube/geometrie.js'); // require the file you want to test
const assert = require('assert');
const Cube = require('../../cube/cube.js')

// describe('Géométrie cube', function () {
// 	it('should check the calculation of the perimeter of a cube with side 3', function() { // change the name accordingly to what you want to test
// 		let response = geometrie.perimetre(3) // call the function you want to test, with the params
//         let result = 12 * 3;
// 		assert.equal(response, result) // what result do you expect?
// 	});
// 	it('should check the calculation of the air face of a cube with side 3', function() {
// 		let response = geometrie.aireFace(3)
//         let result = 3 * 3;
// 		assert.equal(response, result)
// 	});
// 	it('should check the calculation of the surface of a cube with side 3', function() {
// 		let response = geometrie.surface(3);
//         let result = 6 * 3 * 3;
// 		assert.equal(response, result)
// 	});
// 	it('should check the calculation of the volume of a cube with side 3', function() {
// 		let response = geometrie.volume(3)
//         let result = 3 * 3 * 3;
// 		assert.equal(response, result)
// 	});
// });

describe('Géométrie cube class', function () {
	it('should check the calculation of the perimeter of a cube with side 3', function() {
		const cube = new Cube(3);
		let response = cube.perimetre()
        let result = 12 * 3;
		assert.equal(response, result)
	});
	it('should check the calculation of the air face of a cube with side 3', function() {
		const cube = new Cube(3);
		let response = cube.aireFace()
        let result = 3 * 3;
		assert.equal(response, result)
	});
	it('should check the calculation of the surface of a cube with side 3', function() {
		const cube = new Cube(3);
		let response = cube.surface() 
        let result = 6 * 3 * 3;
		assert.equal(response, result)
	});
	it('should check the calculation of the volume of a cube with side 3', function() {
		const cube = new Cube(3);
		let response = cube.volume()
        let result = 3 * 3 * 3;
		assert.equal(response, result)
	});
});
