// Using array comparison

const ages = [12, 78, 02, 05, 55, 43, 89, 14];

function minimumAge(ages) {

    let minAge;
    
    for (let i = 0; i < ages.length; i++) {
    
        if (i === 0) {
            minAge = ages[i];
        }

        if (ages[i] < minAge) {
            minAge = ages[i];
        }
    }

    return minAge;
}

const result = minimumAge(ages)

console.log('result', result)

// Using Math.min

const result2 = Math.min(...ages)
console.log('result2', result2)