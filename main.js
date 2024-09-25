// const apiUrl = 'https://api.waifu.im/search';  // Replace with the actual API endpoint URL
// const params = {
//   included_tags: ['raiden-shogun', 'maid'],
//   height: '>=2000'
// };

// const queryParams = new URLSearchParams();

// for (const key in params) {
//   if (Array.isArray(params[key])) {
//     params[key].forEach(value => {
//       queryParams.append(key, value);
//     });
//   } else {
//     queryParams.set(key, params[key]);
//   }
// }
// const requestUrl = `${apiUrl}?${queryParams.toString()}`;
// console.log(requestUrl);

// fetch(requestUrl)
//   .then(response => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error('Request failed with status code: ' + response.status);
//     }
//   })
//   .then(data => {
//     // Process the response data as needed
//     document.getElementById("image").innerHTML = `<img src="${data.images[0].url}" alt="A random Anime character"/>`
//   })
//   .catch(error => {
//     console.error('An error occurred:', error.message);
//   });
  
//   const { NekosAPI } = require("nekosapi");
 
// const nekos = new NekosAPI();
 
// // This will return an image with the `catgirl` category. If the `categories`
// // argument is not specified, the image will be completely random (no specific
// // categories).
// nekos.getRandomImage((categories = ["catgirl"])).then((image) => {
//     console.log(image.url);
// });
const apiUrl = 'https://api.waifu.im/search';

const headers = new Headers();
headers.append('Accept-Version', 'v6');

fetch(apiUrl, { headers })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Request failed with status code: ' + response.status);
    }
  })
  .then(data => {
    // Process the response data as needed
    document.getElementById("image").innerHTML = `<img src="${data.images[0].url}" class="randomImage" alt="A random Anime character"/>`
  })
  .catch(error => {
    console.error('An error occurred:', error.message);
  });