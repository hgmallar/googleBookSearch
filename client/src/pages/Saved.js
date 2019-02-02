import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Footer from "../components/Footer";
import List from "../components/List";
import API from "../utils/API";
import Modal from "../components/Modal";
import Wrapper from "../components/Wrapper";
import Content from "../components/Content";

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
            <Wrapper>
                <Modal show={this.props.show} handleClose={this.handleClose} title={this.props.title} />
                <Navbar />
                <Jumbotron />
                <Content>
                    <Card icon={<i className="fas fa-save"></i>} title="Saved Books">
                        <List results={this.state.books} action={this.deleteBook} text="Delete" isApi={false} />
                    </Card>
                </Content>
                <Footer />
            </Wrapper>
        );
    }
}

export default Saved;