
// Is two strings are an anagram?
const isAnagram = (str1: string, str2: string) => {
    let getLength1 = str1.length;
    let getLength12 = str2.length;

    // If length of both strings is not same,then they cannot be anagram
    if (getLength1 != getLength12) {
        return false;
    }
    const strSplitSort = (str: string) => {
        const splitStr = str.split('');
        const sortStr = splitStr.sort();
        return sortStr;
    }
    const str1Sort = strSplitSort(str1);
    const str2Sort = strSplitSort(str2);
    // console.log(str1Sort, str2Sort);

    // Compare sorted strings
    for (let i = 0; i < getLength1; i++) {
        if (str1Sort[i] != str2Sort[i])
            return false;
    }
    return true;
}
console.log(`They are anagram string (${isAnagram('bleat', 'table')})`,);
console.log(`They are not anagram string (${isAnagram('eat', 'tar')})`,);



/**
 * 2) Explain the design pattern used in following
        Interface Vehicle {
            int set_num_of_wheels()
            int set_num_of_passengers()
            boolean has_gas()
        }
 */

// a) Explain how can you use the pattern to create car and plane class?
interface Vehicle {
    set_num_of_wheels(): number
    set_num_of_passengers(): number
    has_gas(): boolean
}
// For Car
class Car implements Vehicle {
    set_num_of_wheels() { return 4 }
    set_num_of_passengers() { return 6 }
    has_gas() { return true }
}
// For Plane
class Plane implements Vehicle {
    set_num_of_wheels() { return 5 }
    set_num_of_passengers() { return 50 }
    has_gas() { return true }
}

// b) Use a different design pattern for this solution.
class VehicleBuilder {
    vehicleName: string;
    wheels: number;
    passengers: number;
    gas: boolean;

    constructor(vehicleName: string, wheels: number, passengers: number, gas: boolean) {
        this.vehicleName = vehicleName;
        this.wheels = wheels;
        this.passengers = passengers;
        this.gas = gas;
    }
}
const car = new VehicleBuilder('Car', 4, 6, true);
const plane = new VehicleBuilder('Car', 5, 50, true);
console.log([car, plane]);

