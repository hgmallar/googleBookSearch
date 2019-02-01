import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Footer from "../components/Footer";
import List from "../components/List";
import API from "../utils/API";
import Modal from "../components/Modal";

class Search extends React.Component {
    state = {
        search: "",
        books: [],
        err: ""
    };
    addToSaved = (title, authors, link, image, description) => {
        API.saveBook({ title: title, authors: authors, link: link, image: image, description: description })
            .then(res => {
                console.log("Book added!");
                this.props.saveBook(title);
            })
            .catch(err => console.log(err));

    };
    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };
    handleClose = () => {
        this.props.handleClose();
    };
    updateResults = event => {
        event.preventDefault();
        API.search(this.state.search)
            .then(res => {
                console.log(res);
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                if (res.data.totalItems) {
                    this.setState({ books: res.data.items, error: "" });
                }
            })
            .catch(err => this.setState({ error: err.message }));
    };
    render() {
        const isBooks = this.state.books.length;
        return (
            <div>
                <Modal show={this.props.show} handleClose={this.handleClose} title={this.props.title} />
                <Navbar />
                <Jumbotron />
                <Card icon={<i className="fas fa-book" aria-hidden="true"></i>} title="Book Search">
                    <Form action={this.updateResults} search={this.state.search} handleInputChange={this.handleInputChange} />
                </Card>
                <Card icon="" title="Results">
                    {isBooks ?
                        (<List results={this.state.books} action={this.addToSaved} text="Save" isApi={true} />) :
                        (<h3 className="text-center">Search For A Book To Begin!</h3>)}
                </Card>
                <Footer />
            </div>
        );
    }
}

export default Search;