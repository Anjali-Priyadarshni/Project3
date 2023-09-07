
function Login () {

  return (
    <div class="container mt-3">
  <h2>Login form</h2>
  <form>
    <div class="mb-3 mt-3">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"></input>
    </div>
    <div class="mb-3">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"></input>
    </div>
    <div class="form-check mb-3">
      <label class="form-check-label"> Remember me </label>
        <input class="form-check-input" type="checkbox" name="remember"></input>
      
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
  ) 
  
}

export default Login;