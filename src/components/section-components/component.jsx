import { Component } from "react";
import './file.css'

class Section extends Component {

    render(){
        return(
            <section className='items-section'>
                <div className="upper"> 

                    <div className='categories cap'>
                        <div className='hat'>
                        <h1>HATS</h1>
                        <p>SHOP NOW</p>
                        </div>
                    </div>

                    <div className='categories jacket'>
                        <div className='jackets'>
                        <h1>JACKETS</h1>
                        <p>SHOP NOW</p>
                        </div>
                    </div>

                    <div className='categories shoe'>
                        <div className='sneakers'>
                        <h1>SNEAKERS</h1>
                        <p>SHOP NOW</p>
                        </div>
                    </div>

                </div>

                <div className="lower">

                                
                    <div className='categories w'>
                        <div className='women'>
                        <h1>WOMEN'S</h1>
                        <p>SHOP NOW</p>
                        </div>
                    </div>

                    <div className='categories m'>
                        <div className='men'>
                        <h1>MEN'S</h1>
                        <p>SHOP NOW</p>
                        </div>
                    </div>


                </div>
          

        </section>
        )
    }
}

export default Section