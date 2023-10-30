/**
 * What is async/await?
    /** 
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('I have succeeded');
            }, 1000);
        });

        async function getData(){
            //always return a promise
            // return Promise.resolve('I am data');
            return await promise;
        }

        const dataPromise = getData(); //returns a promise
        // console.log(data);

        const data = getData().then(data => console.log(data)).catch(err=>console.log(err)); // I can get the data from the promise
    */
    /** 

        async function getData(){
            //always return a promise
            // return Promise.resolve('I am data');
            return await promise;
        }

        const dataPromise = getData(); //returns a promise
        // console.log(data);

        const data = getData().then(data => console.log(data)).catch(err=>console.log(err)); // I can get the data from the promise
*/

const api_url = "https://api.github.com/users/rajanshresth";

async function getGithubUser(){
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);

    // fetch() => Response => json() => data

}
getGithubUser();

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('I have succeeded');
    }, 10000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('I have succeeded');
    }, 15000);
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('I have succeeded');
    }, 5000);
});
async function handlePromise(){
    // JS engine will wait for the promise to resolve
    const data = await promise;
    console.log("Namasate");
    console.log(data);

    const data3 = await promise3;
    console.log("Namasate 3x");
    console.log(data3);

    const data2 = await promise2;
    console.log("Namasate 2x");
    console.log(data2);
}
// handlePromise();

// function getData(){
//     // JS engine will not wait for the promise to resolve
//      promise.then(data => console.log(data));

//      console.log("Namasate");
// }
// getData();

