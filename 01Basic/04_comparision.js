/*
    console.log(2>1); // greater to
    console.log(2>=1); // greater or equal to 
    console.log(2<1); // lesser to
    console.log(2<=1) // lesser or equal to
    console.log(2==1); // equal to
    console.log(2!=1); //not equal to
*/


/*
    // the reason is that an equality check == and comparisons > < >= <= work differently.

    // Comparisons convert null to a number, treating it as 0. That’s why (2 > null) is true and (2 < null) is false.

    // On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (null == undefined) is true and (null > 0) is false.

    console.log(null == undefined); // true
    console.log(null ==0); // false
    console.log(null > 0); // false
    console.log(null >= 0); // true
*/