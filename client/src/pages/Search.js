import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Footer from "../components/Footer";
import List from "../components/List";
import API from "../utils/API";

class Search extends React.Component {
    state = {
        search: "",
        books: [],
        err: ""
    };
    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };
    updateResults = event => {
        event.preventDefault();
        API.search(this.state.search)
            .then(res => {
                console.log(res);
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ books: res.data.items, error: "" });
                console.log("HERE" + this.state.books);
            })
            .catch(err => this.setState({ error: err.message }));
    };
    render() {
        const isBooks = this.state.books.length;
        return (
            <div>
                <Navbar />
                <Jumbotron />
                <Card icon={<i className="fas fa-book" aria-hidden="true"></i>} title="Book Search">
                    <Form action={this.updateResults} search={this.state.search} handleInputChange={this.handleInputChange} />
                </Card>
                <Card icon="" title="Results">
                    { isBooks ?
                        (<List results={this.state.books} />) :
                        (<h3 className="text-center">Search For A Book To Begin!</h3>) }
                </Card>
                <Footer />
            </div>
        );
    }
}

export default Search;