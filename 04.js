

function createNumberFunctions() { 
    var nums = [];

    for (i = 0; i < 10; i++) {
        nums[i] = i+i;
    }

    return nums;
}

const numberFunctions = createNumberFunctions();
console.log(numberFunctions[0](2));