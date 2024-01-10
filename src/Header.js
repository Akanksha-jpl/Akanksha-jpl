
function Header(){
    return(
       <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a n="navbar-brand" href="#">NYKAA</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Categories</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Brands</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Nykaa Fashion</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Beauty Advice</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        
        <button className="btn btn-outline-success" type="submit">Sign In</button>
      </form>
    </div>
  </div>
</nav>
</div>
     )
    
}
export default Header;