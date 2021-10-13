import React from 'react';

const searchFetch = () => {
    fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.state.inputValue}&apikey=demo`)
    .then(res => res.json())
    .then(searchdata =>
    this.setState({ searchData: searchdata }, () => console.log(this.state.searchData))
    )}

function Search() {

        return (
            <div>
                <form style={{ paddingTop: "75px" }} onSubmit={(e) => this.submitHandler(e)}>
                    <center>
                        <input type="text" placeholder="Enter Symbol" onChange={(e) => (e)}></input>
                        <button type="submit" onClick={searchFetch}>Submit</button>
                    </center>
                </form>
            </div>
        )
    }

export default Search; 