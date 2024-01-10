import nykaa1 from '../../src/assets/nykaa1.jpg';
import nykaa2 from '../../src/assets/nykaa2.jpeg';
import eyes from '../../src/assets/eyes.jpeg';
function Card(){
    return(

        <div class="card-group">
  <div className="card">
  <img src={nykaa1} className="d-block w-100" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Beauty</h5>
      <p className="card-text">Nykaa is an Indian e-commerce company headquartered in Mumbai. It sells beauty, wellness and fashion products through its website, mobile app, and over 100 physical stores.</p>
      
    </div>
  </div>
  <div className="card">
  <img src={nykaa2} className="d-block w-100" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Combo</h5>
      <p className="card-text">To create a world where our consumers have access to a finely curated, authentic assortment of products and services that delight and elevate the human spirit.</p>
   </div>   
  </div>
  <div className="card">
  <img src={eyes} className="d-block w-100" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Eyeshadow Pallette</h5>
      <p className="card-text">An eyeshadow palette offers a spectrum of shades, usually within the same color group, or at least in complementary shades. </p>
     
    </div>
  </div>
</div>
    )
}
export default Card;