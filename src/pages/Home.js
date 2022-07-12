import {Link} from "react-router-dom"

document.title = "MONsoon";
export default function Home(){
  return(
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-10 col-12 mx-auto">
                <div className="row">
                     {/* left div  */}
                    <div className="col-md-6 col-12 main_header_left">
                        <p>Welcome to weather app</p>
                        <h1>Get the Latest <span className="text-color">Weather</span> Updates of your City</h1>
                        <Link to="/weather"><button>Check now</button></Link>
                    </div>

                         {/* right div  */}
                    <div class="col-md-6 col-12 main_header_right">
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                  <img src="images/rainy-couple2.jpg" class=" w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                  <img src="images/rainy-girl.jpg" class=" w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                  <img src="images/rainy-couple.jpg" class=" w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                  <img src="images/walking-couple.jpg" class=" w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                  <img src="images/sun-umbrella.jpg" class=" w-100" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
