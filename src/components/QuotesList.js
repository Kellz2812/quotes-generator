import React, { Component } from 'react';
import axios from 'axios';
import '../../src/App.css';


export default class QuotesList extends Component {

    constructor(props) {
        super(props);
        this.state = { quotes: [] };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if (this.state.quotes.length === 0) this.getQuotes();
    }

    async getQuotes() {
        let res = await axios.get("https://quotes.rest/qod?language=en", {
            headers: { Accept: "application/json" }
        });

        let quotes = res.data.contents.quotes[0];
        console.log(quotes);
        this.setState({ quotes: quotes });
    }

    handleClick() {
        this.getQuotes();
    }

    render() {
        return (
            <div className="QuotesList-Wrapper">
                <h1 className="QuotesList-Header">Quote of the Day...</h1>
                <div className="QuotesList-Quotes">
                    {this.state.quotes.quote}
                </div>
                <div className="QuotesList-Author">
                    {this.state.quotes.author}
                </div>
                <button className="QuotesList-Button" onClick={this.handleClick}>New Quote!</button>
            </div>
        )
    }
}
