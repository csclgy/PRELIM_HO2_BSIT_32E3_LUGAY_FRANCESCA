const footer = () => {
  return (
    <div>
      <div class="footer">
        <div class="row">
          <div class="col-sm-4">
            <p></p>
            <b>Cesca's Portfolio</b>
            <p>All Rights Reserved, 2025</p>
            <br></br>
          </div>
          <div class="col-sm-4">
            <p>
              <a href="#section1" id="footerText">
                Home
              </a>
            </p>
            <p>
              <a href="#section2" id="footerText">
                About
              </a>
            </p>
            <p>
              <a href="#section3" id="footerText">
                Contact
              </a>
            </p>
          </div>
          <div class="col-sm-4" id="footerAlign">
            <p></p>
            <p>Get to know us in</p>
            <a href="https://www.facebook.com/csclgy/" id="footerText">
              {" "}
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default footer;
