function perimetre(lgCote) {
    return 12 * lgCote;
}

function aireFace(lgCote) {
    return lgCote * lgCote;
}

function surface(lgCote) {
    return 6 * lgCote * lgCote;
}

function volume(lgCote) {
    return lgCote * lgCote * lgCote;
}

module.exports = {
    aireFace,
    perimetre,
    surface,
    volume
};