document.title = "MONsoon | About";
export default function About() {
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-10 col-12 mx-auto">
                    <div class="row">
                        {/* left div */}
                        <div class="col-md-6 col-12 main_header_right">
                            <figure>
                                <img src="images/about.png" alt="" />
                            </figure>
                        </div>
                         {/* right div  */}
                    <div class="col-md-6 col-12 main_header_left">
                            <p>Welcome to weather app</p>
                            <h1>I am <span class="text-color">Full-Stack Web Developer</span> and DevOps Engineer</h1>
                            <a href="http://portfolio.arsalansheikh.surge.sh/" target="author"><button>Visit</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}