class Cube {
    constructor(lgCote) {
        this.lgCote = lgCote;
    }

    perimetre() {
        return 12 * this.lgCote;
    }
    
    aireFace() {
        return this.lgCote * this.lgCote;
    }
    
    surface() {
        return 6 * this.lgCote * this.lgCote;
    }
    
    volume() {
        return this.lgCote * this.lgCote * this.lgCote;
    }
}

module.exports = Cube;