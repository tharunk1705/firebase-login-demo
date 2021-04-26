import React from "react";

const Home = ({handleLogout}) => {
    return(
        <section>
            <nav>
                <h2>Welcome</h2>
                <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    );
};

export default Home;