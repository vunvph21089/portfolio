

const contactPage = () => {
  return `
  <section id="contact">

  <div class="container">
      <div class="row">
          <div class="col-12">
              <div class="heading">
                  <h2>Get in Touch</h2>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-12">
              <form action="">
                  <div class="row">
                      <div class="col-md-6 col-sm-12 col-xs-12">
                          <div class="form-group">
                              <input class="form-control" name="121" type="text" required="name" placeholder="Enter Your Name">
                          </div>
                      </div>
                      <div class="col-md-6 col-sm-12 col-xs-12">
                          <div class="form-group">
                              <input class="form-control" name="122" type="text" required="email" placeholder="Enter Your Email">
                          </div>
                      </div>
                      <div class="col-12">
                          <div class="form-group">
                              <input class="form-control" name="123" type="text" required="subject" placeholder="Subject (optinal)">
                          </div>
                      </div>
                      <div class="col-12">
                          <div class="form-group">
                              <textarea class="" cals="40" rows="10" name="124" type="text" placeholder="Message"></textarea>
                          </div>
                      </div>
                      <div class="col-12">
                          <div class="send">
                              <a href="#">Send</a>
                          </div>
                      </div>
                  </div>
              </form>
              <div class="inter">
                  <h6>Contact</h6>
              </div>
          </div>
      </div>
  </div>


</section>


  `
}

export default contactPage