//Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

const area_of_triangle = (a,b,c)=>{
    let s = (a+b+c)/2;
    const area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return area;
}
console.log(area_of_triangle(5,6,7));