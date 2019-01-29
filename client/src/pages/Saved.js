import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Saved() {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <Card icon={<i className="fas fa-save"></i>} title="Saved Books"></Card>
            <Footer />
        </div>
    );
}

export default Saved;