import React from "react";

const contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="column">
          {/* contact form */}

          <form class="form">
            <h2>Let's Talk</h2>
            <div className="form-input">
              <label for="name">Full Name</label>
              <input type="text" name="name" placeholder="Your name.." />
            </div>

            <div className="form-input">
              <label for="lname"> Email Address</label>
              <input type="text" name="email" placeholder="someone@email.com" />
            </div>

            <div className="form-input">
              <label for="subject">Message</label>
              <textarea
                rows={10}
                name="subject"
                placeholder="Write something.."
              />
            </div>
            <div>
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contact;
