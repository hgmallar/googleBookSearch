import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Footer from "../components/Footer";

function Search() {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <Card icon={<i className="fas fa-book" aria-hidden="true"></i>} title="Book Search"><Form /></Card>
            <Card icon="" title="Results"><h3 className="text-center">Search For A Book To Begin!</h3></Card>
            <Footer />
        </div>
    );
}

export default Search;