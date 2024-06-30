import "./Task1.css";
import axios from "axios";

function render(data) {
    data.forEach((user) => {
        let container = document.querySelector(".container");
        container.innerHTML += `
        <div class="card">
            <img src="${user.image.medium}" alt="" />
            <div>
                <h2>Name: ${user.name}</h2>
                <h2>Rating: ${user.rating.average}</h2>
            </div>
        </div>
        `;
    });
}

const Task1 = () => {
    axios.get("https://api.tvmaze.com/shows").then((res) => {
        render(res.data);
    });
    return (
        <>
            <div className="div">
                <a href="../task3/Task3.jsx">Task-3</a>
                <h1>Task-1</h1>
                <h2 className="title">Moves</h2>
                <div className="container"></div>
            </div>
        </>
    );
};

export default Task1;
