import React, { Component } from 'react';
import axios from 'axios';
import '../../src/App.css';


export default class QuotesList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {quotes: []};
        this.handleClick=this.handleClick.bind(this);
    }

     componentDidMount(){
        if (this.state.quotes.length === 0) this.getQuotes();
    }

async getQuotes(){
        let quotes = [];
            let res = await axios.get("http://quotes.stormconsultancy.co.uk/random.json", {
                headers: {Accept: "application/json"}
            });
            quotes.push(res.data.quote);
        this.setState({quotes: quotes});
    }

handleClick () {
    this.getQuotes();
}

    render() {
        return (
            <div className="QuotesList-Wrapper">
                <h1 className="QuotesList-Header">Quotes for Developers</h1>
                <div className="QuotesList-Quotes">
                    {this.state.quotes}
                </div>
                <button className="QuotesList-Button" onClick={this.handleClick}>New Quote!</button>
            </div>
        )
    }
}
