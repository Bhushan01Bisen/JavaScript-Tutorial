
const fetchData = (shouldSucceed) => {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation (e.g., fetching data from a server)
      setTimeout(() => {
        if (shouldSucceed) {
          const data = { message: "Data successfully fetched!" };
          resolve(data);
        } else {
          reject("Error: Unable to fetch data!");
        }
      }, 2000); // Simulating a delay of 2 seconds
    });
  };
  
  // Example usage of the Promise
  fetchData(true)
    .then((result) => {
      console.log(result.message); // Output: Data successfully fetched!
    })
    .catch((error) => {
      console.error(error); // Output (if shouldSucceed is false): Error: Unable to fetch data!
    });
  