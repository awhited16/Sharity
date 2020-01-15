import React from "react";
import Login from "../components/Login";
import CreateAccountButton from "../components/CreateAccountButton";

function Home() {
    return (
        <div className="create_business_registration">
            <h1>Welcome</h1>
            <Login />
            <CreateAccountButton/>
        </div>
    );
}
export default Home;
