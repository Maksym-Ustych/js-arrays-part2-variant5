const A = [1, 2, 3, 4, 5];
const B = [4, 5, 6, 7, 8];

const output = document.getElementById("output");

// Union
function union() {
    const result = [...new Set([...A, ...B])];
    output.innerHTML = "Union: " + result.join(", ");
}

// Intersection
function intersection() {
    const result = A.filter(x => B.includes(x));
    output.innerHTML = "Intersection: " + result.join(", ");
}

// Difference
function difference() {
    const result = A.filter(x => !B.includes(x));
    output.innerHTML = "Difference A-B: " + result.join(", ");
}

// Symmetric Difference
function symmetric() {
    const result = [
        ...A.filter(x => !B.includes(x)),
        ...B.filter(x => !A.includes(x))
    ];
    output.innerHTML = "Symmetric Difference: " + result.join(", ");
}

// Subset
function subset() {
    const isSubset = A.every(x => B.includes(x));
    output.innerHTML = "A є підмножиною B: " + isSubset;
}

function clearOutput() {
    output.innerHTML = "";
}