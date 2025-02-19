const header = () => {
  return (
    <div>
      <div class="container-fluid p-4" id="MainHeader">
        <h1>CESCA'S PORTFOLIO</h1>
        <p id="p1">A website about me</p>
      </div>

      <div class="homeNav" id="homeNav">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <ul class="nav navbar-nav">
              <li>
                <a href="#section1">Home</a>
              </li>
              <li>
                <a href="#section2">About</a>
              </li>
              <li>
                <a href="#section3">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default header;
