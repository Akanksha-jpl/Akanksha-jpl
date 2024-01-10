function Navbar(){
    return( 
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Makeup</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Skin</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Natural</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Health and Wellness
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Wellness Equipment</a></li>
                  <li><a class="dropdown-item" href="#">Weighing Scales</a></li>
                  <li> class="dropdown-divider"</li>
                  <li><a class="dropdown-item" href="#">Support and Braces</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">fragrance</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
       
    
}
export default Navbar;