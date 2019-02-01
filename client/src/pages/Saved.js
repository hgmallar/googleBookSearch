import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Footer from "../components/Footer";
import List from "../components/List";
import API from "../utils/API";
import Modal from "../components/Modal";

class Saved extends React.Component {
    state = {
        books: [],
        err: ""
    };

    componentDidMount() {
        this.loadBooks();
    };

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data })
            )
            .catch(err => console.log(err));
    };
    handleClose = () => {
        this.props.handleClose();
    };
    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Modal show={this.props.show} handleClose={this.handleClose} title={this.props.title} />
                <Navbar />
                <Jumbotron />
                <Card icon={<i className="fas fa-save"></i>} title="Saved Books"></Card>
                <Card icon="" title="Results">
                    <List results={this.state.books} action={this.deleteBook} text="Delete" isApi={false} />
                </Card>
                <Footer />
            </div>
        );
    }
}

export default Saved;