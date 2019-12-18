import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            searchTerm: '',
            linearCount: 0,
            binaryCount: 0
        };
    }

    handleSearch(e){this.setState({search: e.target.value});}
    handleSearchTerm(e){this.setState({searchTerm: e.target.value});}
    onSubmit = (e) => {
        e.preventDefault();
        this.setState({linearCount: 0,binaryCount: 0});

        let sortedSearch = this.state.search.split(' ').sort();
        console.log(sortedSearch);
        console.log(this.indexOf(sortedSearch, this.state.searchTerm));
       console.log(this.binarySearch(sortedSearch, this.state.searchTerm));
    };

    indexOf = (array, value) => {
        for (let i = 0; i < array.length; i++) {
            this.setState({linearCount: i});
            if (array[i] === value) {
                return i;
            }
        }
        return -1;
    };

    binarySearch(array, value, start, end, counter=0) {
        start = start === undefined ? 0 : start;
        end = end === undefined ? array.length : end;

        if (start > end) {
           this.setState({binaryCount: counter});
            return -1;
        }

        const index = Math.floor((start + end) / 2);
        const item = array[index];
        //console.log(start, end);
        if (item === value) {
            this.setState({binaryCount: counter});
            return index;
        } else if (item < value) {
            return this.binarySearch(array, value, index + 1, end, counter+1);
        } else if (item > value) {
            return this.binarySearch(array, value, start, index - 1, counter+1);
        }
    }

    render() {
        return (
            <div className="App">
                <h1>DSA Searching</h1>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <label> Search Through
                        <textarea value={this.state.search} onChange={(e) => this.handleSearch(e)}/>
                    </label>
                    <label> Search Term:
                        <input type='text' value={this.state.searchTerm} onChange={(e) => this.handleSearchTerm(e)}/>
                    </label>
                    <button type='submit' onClick={(e) => this.onSubmit(e)}>Submit</button>
                </form>
                <p>Linear Step Count: {this.state.linearCount}</p>
                <p>Binary Step Count: {this.state.binaryCount}</p>
            </div>
        );
    }
}

export default App;
