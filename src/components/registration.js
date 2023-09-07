
function Registration () {
    return ( 
        <div class="container mt-3">
  <h2>Registration form</h2>
  <form>
    <div class="mb-3 mt-3 ">
      <label for="nane">Name:</label>
      <input type="name" class="form-control" id="first-name" placeholder="First Name" name="fn"></input>
	  </div>
	  <div class="mb-3">
	  <input type="name" class="form-control" id="last-name" placeholder="Last Name" name="ln"></input>
    </div>
	<label for="birthday">Birthday:</label>
	<div class="mb-3">
  <input type="date" id="birthday" name="birthday"></input>
  </div>
    <label for="gender">Gender:</label>
    <div class="form-check mb-3">
      <label class="form-check-label" > Male </label>
        <input class="form-check-input" type="radio"  id="male" name="any_one"></input>
    </div>
	<div class="form-check mb-3">
      <label class="form-check-label"> Female </label>
        <input class="form-check-input" type="radio" id="female" name="any_one"></input>
    </div>
	<label for="phno">Phno:</label>
	<div class="mb-3">
	  <input type="number" class="form-control" id="no" placeholder="Ph No" name="Ph"></input>
    </div>
	<div class="mb-3">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"></input>
    </div>
	<label for="address">Add:</label>
	<div class="mb-3">
	  <input type="address" class="form-control" id="add" placeholder="Add" name="addr"></input>
    </div>
	<label for="nationality">Nationality:</label>
    <div class="form-check mb-3">
      <label class="form-check-label"> Indian </label>
        <input class="form-check-input" type="radio" id="nation" name="any_one"></input>
    </div>
	<div class="form-check mb-3">
      <label class="form-check-label"> Non Indian </label>
        <input class="form-check-input" type="radio" name="any_one"></input>
    </div>
	<label for="gender">Product:</label>
	<div class="form-check mb-3">
      <label class="form-check-label"> Electronic device </label>
        <input class="form-check-input" type="checkbox" name="Electronic"></input>
    </div>
	<div class="form-check mb-3">
      <label class="form-check-label"> Grossary </label>
        <input class="form-check-input" type="checkbox" name="grossary"></input>
    </div>
	<div class="form-check mb-3">
      <label class="form-check-label"> Beauty Product </label>
        <input class="form-check-input" type="checkbox" name="Beauty"></input>
    </div>
	<div class="form-check mb-3">
      <label class="form-check-label"> Cloths </label>
        <input class="form-check-input" type="checkbox" name="cloth"></input>
    </div>
    <button type="submit" class="btn btn-primary" >Submit</button>
  </form>
    </div> 
)

}

export default Registration ;