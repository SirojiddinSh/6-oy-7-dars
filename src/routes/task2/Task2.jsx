// import "./Task2.css";
// import axios from "axios";

// function render(data) {
//     data.forEach((user) => {
//         let container = document.querySelector(".container");
//         container.innerHTML += `
//         <div class="card">
//             <img src="${user.image.medium}" alt="" />
//             <div>
//                 <h2>Name: ${user.name}</h2>
//                 <h2>Rating: ${user.rating.average}</h2>
//             </div>
//         </div>
//         `;
//     });
// }

// const Task2 = () => {
//     axios("https://api.tvmaze.com/shows/1").then((res) => {
//         render(res.data), console.log(res);
//     });
//     return (
//         <>
//             <div className="container"></div>
//         </>
//     );
// };

// export default Task2;
