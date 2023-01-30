import React from "react";
import { ModalFooter } from "react-bootstrap";


function Footer() {
    return (
      <>
      <ModalFooter class="row p-3 justify-content-between bg-light mt-5 fixed-bt">
     <div class="col-md-3 text-dark ml-2 align-self-end"> 
        <h1 class="text-justify purple_t"><span class="text-outline-5">@</span> ASOV<sub>@</sub>DEV</h1>
    </div>

    <div class="col-md  text-dark ml-2">
        <h2 class="purple_t">  Let's talk</h2><hr/>
        <p>Share Via FB</p><hr/>
        <p>Tell People About US</p><hr/>
        <p>products</p>
    </div>
    <div class="col-md  text-dark  align-self-end ml-2">
        <h2 class="text-justify purple_t "> Contact</h2>
        <p>Abuja, Nigeria</p>
        <p>info@gmail.com</p>
        <p>+234 000000000</p>
    </div>

    <div class="col-md colour text-dark align-self-end ml-2">
        <h2 class="text-justify purple_t">Follow us@</h2>
        <div class="align-content-end media ms-2">
          <a href="/" class="fa fa-facebook">facebook</a><br/>
          <a href="/" class="fa fa-twitter">twitter</a><br/>
          <a href="/" class="fa fa-instagram">instagram</a><br/>
          <a href="/" class="fa fa-linkedin">linkedin</a><br/>
          <a href="/" class="fa fa-youtube">youtube</a>
        </div>
    </div> 
<hr class="text-light"/> 

    <div class="row  p-2 centerbtn mx-auto justify-content-between purple bg-dark mt-5 fixed-bt">
        <div class="col-md-12  text-primary ml-2 ">
            <p class="text-center text-white"> copyright © ASOV@DEV <span id="year">2023</span>. <span class="text-primary m-auto">contact us.</span></p>
        </div>
    </div>
  

</ModalFooter>
      </>
);
}

      export default Footer;