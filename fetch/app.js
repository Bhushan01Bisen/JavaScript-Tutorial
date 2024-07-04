// fetch('https://api.example.com/data')
//   .then(response => {
//     // Check if the response is successful (status code 200-299)
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
    
//     // Parse the response as JSON
//     return response.json();
//   })
//   .then(data => {
//     // Handle the parsed data
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle any errors that occurred during the fetch
//     console.error('Fetch error:', error);
//   });
let p = fetch("https://api.thecatapi.com/v1/images/search");

p.then((value) => {
    console.log(value.status);
    console.log(value.ok);
    return value.json();
}).then((value2) => {
    console.log(value2);
}).catch((error) => {
    console.error('Fetch error:', error);
});
