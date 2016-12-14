// Multidimensional Iterator
function MDI(len,dim,o=0) {
	len += o;
	var arr = [];
	for (var d = 0; d < dim; d++) {
		arr.push(o);
	}
	this.con = function() {
		return (arr.length == dim);
	}
	this.inc = function(by=1) {
		arr[0] += by;
		for (var i = 0; i < dim; i++) {
			if (arr[i] >= len) {
				arr[i] = o;
				arr[i+1] += by;
			}
		}
	}
	this.arr = arr;
}

// Multidimensional Matrix Constructor
function Matrix(len,dim) {
	if (dim > 1) {
		for (var i = 0; i < len; i++) {
			this[i] = new Matrix(len,dim-1);
		}
	} else {
		for (var i = 0; i < len; i++) {
			this[i] = 0;
		}
	}
}

// Returns an element in the matrix, specified by arr.
// index(matrix,[x,y,z]) returns matrix[x][y][z].
function index(matrix,arr) {
	var element = matrix;
	for (var i = 0; i < arr.length; i++) {
		element = matrix[arr[i]]
	}
	return element;
}

module.exports={MDI:MDI,Matrix:Matrix,index:index};