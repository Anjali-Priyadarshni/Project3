
function Contactus () {

    return ( 

  <div class="container mt-3">
  <h2>Contact Me</h2>
  <form>
    
    <div class="mb-3 mt-3">
	<label for="name">First Name:</label>
	<input type="text" class="form-control"  placeholder="Enter FN" name="first name"/>
	</div>

    
	 <div class="mb-3">
	<input type="text" class="form-control"  placeholder="Enter LN" name="last name"/>
	</div>
	<div class="mb-3">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
    </div>
	<div class="mb-3">
      <label for="email">Company Email:</label>
      <input type="cemail" class="form-control" id="cemail" placeholder="Enter Company email" name="cemail"/>
    </div>
    <label for="phno">Phno:</label>
	<div class="mb-3">
	  <input type="number" class="form-control" id="no" placeholder="Ph No" name="Ph"/>
    </div>
	<label for="address">Add:</label>
	<div class="mb-3">
	  <input type="address" class="form-control" id="add" placeholder="Add" name="addr"/>
    </div>
    <div class="form-check mb-3">
      <label class="form-check-label"> Remember me </label>
        <input class="form-check-input" type="checkbox" name="remember"/>
    </div>
    <button type="submit" class="btn btn-primary" onclick="demo()">Submit</button>
  </form>
</div>
    )
}

export default Contactus;