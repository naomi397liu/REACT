"use strict";

function Homepage() {
  return (
    <div>
      <h3>Welcome to Balloonicorn's Trading Card site</h3>
      <a href= "/cards">cards page</a>
      <img src="static/img/balloonicorn.jpg"></img>
    </div>
  );
}



ReactDOM.render(<Homepage />, document.querySelector('#app'));
