const body = () => {
  return (
    <div>
      <section id="section1">
        <div class="col-sm-6">
          <h2 id="Highlight1">Francesca A. Lugay</h2>
          <h5>3RD YEAR | BSIT 32E3</h5>
          <hr></hr>
          <h3 id="Highlight2">Academic Interests</h3>
          <p>
            I chose to pursue an IT course in college because I was inspired by
            my brother, who I often watched working on his code. My interest
            grew even more when I joined a website development contest in high
            school. That experience sparked my passion for coding, and from that
            day on, I knew I wanted to study IT. I am particularly interested in
            front-end development, as I enjoy creating visually appealing and
            user-friendly interfaces.
          </p>
        </div>
        <div class="col-sm-6">
          <div class="row">
            <div class="col-sm-2">
              <p></p>
            </div>
            <div class="col-sm-8">
              <img
                src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t1.6435-9/130810454_3487320538052884_5895616354340212556_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeE00nqXDP2CKvTDEmlzmxYqMX5JA4TZKYoxfkkDhNkpijCwI9YICSqSkXGxEPLnCt1bHXJKLoAPqYR__w58giam&_nc_ohc=f1OWJtWm1RkQ7kNvgFkOq_s&_nc_oc=AdiVFUUNLshWZqmQoi07cFAGqTS4TYy96GMy5vnSf3sdmzUDD8gYWTIPPL6W1MMTcHobabqt42iVoXBIf9aanBMT&_nc_zt=23&_nc_ht=scontent.fmnl8-3.fna&_nc_gid=AwncsPn8mPBGyyXU2KxZ3c8&oh=00_AYDrv5a7Jx2RB9_ZSj71vxT7Y__mXI9KKgTDU-aBD6EVHg&oe=67DDB0D1"
                alt="profile"
                id="Resize"
              ></img>
              <p></p>
            </div>
            <div class="col-sm-2">
              <p></p>
            </div>
          </div>
        </div>
      </section>
      <br></br>

      <section id="section2">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12">
              <hr></hr>
              <h2 id="Highlight2">ABOUT</h2>
            </div>
            <div class="col-sm-6">
              <h3 id="Highlight1">ACHIEVEMENTS</h3>
              <hr></hr>
              <ul>
                <li>Deportment Award (2nd Year College)</li>
                <li>IT Specialist Database Passer (2nd Year College)</li>
                <li>With honors (Grade 11-12)</li>
                <li>With honors (Grade 9-10)</li>
                <li>
                  3rd place in Buwan ng Wika Poster Making Contest (Grade 10)
                </li>
                <li>
                  3rd Place in Computer Science Month Poster Making Contest
                  (Grade 10)
                </li>
                <li>
                  3rd Place in Computer Science Month Web Design Program Contest
                  (Grade 9)
                </li>
                <li>Perfect Attendance (Grade 9-10)</li>
              </ul>
            </div>
            <div class="col-sm-6">
              <h3 id="Highlight1">CURRENT SCHOOL</h3>
              <hr></hr>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT2IIKGDvNsC0uPsifck-jyIMqa3Lx11q61g&s"
                id="Resize"
              ></img>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>

        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6">
              <hr></hr>
              <h3 id="Highlight1">SKILLS</h3>
              <hr></hr>
              <ul>
                <li>Quick to learn</li>
                <li>Adaptable to change</li>
                <li>Effective in time management</li>
                <li>Good in communication skills</li>
                <li>Proficient in the English language</li>
                <li>Does quality service and work effectively</li>
              </ul>
            </div>
            <div class="col-sm-6">
              <hr></hr>
              <h3 id="Highlight1">EXPERTISE</h3>
              <hr></hr>
              <ul>
                <li>Programming</li>
                <li>Web Development</li>
              </ul>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div class="col-sm-6">
          <h3 id="Highlight1">HOBBIES</h3>
          <hr></hr>
          <a
            class="btn btn-primary"
            id="hobbiesBtn"
            role="button"
            onclick="hobbies()"
          >
            Click me
          </a>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </section>

      <section id="section3">
        {/* <!-- CONTACT SECTION --> */}
        <div class="container-fluid">
          <div class="col-sm-12">
            <h2 id="contactHeader">CONTACT US</h2>

            {/* <!-- FORM --> */}
            <div class="row">
              <div class="col-sm-3">
                <p></p>
              </div>
              <div class="col-sm-6" id="Highlight2">
                <div class="row">
                  <hr></hr>
                  <div class="col-sm-6">
                    <form>
                      <div class="form-group">
                        <label for="Name">Name:</label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Type here..."
                        ></input>
                      </div>
                    </form>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="Email">Email:</label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Type here..."
                      ></input>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label for="Email">Subject:</label>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Type here..."
                      ></input>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label for="message">Message:</label>
                      <textarea
                        class="form-control"
                        id="message"
                        rows="5"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <button
                      type="submit"
                      onclick="submitform()"
                      class="btn btn-primary mb-2"
                      id="submitBtn"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default body;
