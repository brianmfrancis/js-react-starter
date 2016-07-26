
import React from 'react';

let id = 0;

const SearchBar = (props) => {
  function submit(event) {
    event.preventDefault();
    props.onSubmit(id, document.getElementById('text').value);
    id++;
    document.getElementById('searchbar').reset();
  }

  return (
    <div>
      <form id="searchbar" onSubmit={submit}>
        <input type="text" id="text" placeholder="title for a new note" />
        <input type="submit" value="Submit" id="submit" />
      </form>
    </div>
    );
};

export default SearchBar;
// import React, { Component } from 'react';
//
//
// class SearchBar extends Component {
//   // constructor(props) {
//   //   super(props);
//   //
//   //   this.state = { input: '' };
//   //   this.onInputChange = this.onInputChange.bind(this);
//   // }
//   //
//   // onInputChange(event) {
//   //   console.log(event.target.value);
//   //   this.setState({ input: event.target.value });
//   //   // this.props.onSearchChange(this.state.input);
//   // }
//   onSubmit(event) {
//     event.preventDefault();
//     props.onSubmit(id, document.getElementById('text').value);
//     id++;
//     document.getElementById('inputbar').reset();
//   }
//   render() {
//     return (
//       <div id="searchbar">
//         <input onChange={this.onInputChange} value={this.state.input} />
//         <button onClick={this.onSubmit}>Add A Note</button>
//       </div>
//     );
//   }
// }
//
// export default SearchBar;
