import nykaa1 from '../../src/assets/nykaa1.jpg';
import nykaa2 from '../../src/assets/nykaa2.jpeg';
import eyes from '../../src/assets/eyes.jpeg';

function Carousel(){
    return(
        <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={nykaa1} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Example Headline</h5>
              <p>Some representative placeholder content for the first slide.</p>
              <button type="button" class="btn btn-primary">Sign Up today</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={nykaa2} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Another example headline.</h5>
              <p>Some representative placeholder content for the second slide.</p>
              <button type="button" class="btn btn-primary">Learn more</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={eyes} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>One more for good measure.</h5>
              <p>Some representative placeholder content for the third slide.</p>
              <button type="button" class="btn btn-primary">Browse Gallery</button>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
}
export default Carousel;

 