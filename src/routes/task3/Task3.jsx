import "./Task3.css";

const Task3 = () => {
    function ds() {
        let dots = document.querySelector(".dots");
        let moreText = document.querySelector(".moretext");
        let btn = document.querySelector(".btn");

        if (dots.style.display == "inline") {
            dots.style.display = "none";
            moreText.style.display = "inline";
            btn.innerHTML = "Show Less";
        } else {
            dots.style.display = "inline";
            moreText.style.display = "none";
            btn.innerHTML = "Show More";
        }
    }
    return (
        <>
            <div className="ShowMore__container">
                <a href="../task1/Task1.jsx">Task-1</a>
                <h1>Task-3</h1>
                <div className="ShowMore">
                    <h1>Show More Button</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Illum quas recusandae consequuntur commodi
                        assumenda. Possimus beatae dolorum voluptate minima
                        aspernatur nihil voluptates, eius sapiente labore ut
                        iusto in, earum architecto rem molestias? Eos cum
                        quisquam consequuntur veritatis rerum sequi, quidem ex
                        omnis molestiae veniam beatae numquam ipsa aut
                        temporibus quia fuga officia.
                        <span className="dots">...</span>
                        <span className="moretext">
                            Reprehenderit doloribus nisi repudiandae quaerat hic
                            maiores, minima et tenetur vel amet ipsa, atque
                            expedita, molestiae corporis modi praesentium porro
                            labore iste non consectetur facilis? Dolore laborum
                            minus, voluptas reiciendis doloribus fuga, aliquam
                            eius voluptatum nobis similique aspernatur? Illum
                            rem architecto quisquam alias debitis quasi delectus
                            earum ab! Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Iusto quo, accusamus assumenda
                            laudantium temporibus harum praesentium nam odit
                            quaerat ut expedita dicta laboriosam sed voluptas
                            repudiandae velit iure ducimus fugit voluptates
                            numquam quae quisquam dolorum nihil provident.{" "}
                        </span>
                    </p>
                    <button onClick={ds} className="btn">
                        Show Less
                    </button>
                </div>
            </div>
        </>
    );
};

export default Task3;
