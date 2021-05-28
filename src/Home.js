import React from "react";
import "./Home.css";
import Product from "./Product";
function Home(){
    return <div className="home">
        <div className="home_container">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_JN._CB656273403_.jpg" alt=""/>
        <div className = "home__row">
            
            <Product id="123451" title="The Bed Sheet" price={150} image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/bedsheet_B06Y5GF9SF_Asins_186x116._SY116_CB409842842https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/bedsheet_B06Y5GF9SF_Asins_186x116._SY116_CB40984284_.jpg" rating={4} />
            <Product id="123452" title="Poco M2 6/64 helio G80" price={9999} image="https://www.xda-developers.com/files/2020/09/POCO-M2-Brick-Red_3.png" rating={4} />
            
        </div>
        <div className = "home__row">
            <Product id="123453" title="mixer-grinder" price={2999} image="https://rukminim1.flixcart.com/image/416/416/k8ytaq80/mixer-grinder-juicer/t/r/m/bajaj-classic-750-watts-mixer-grinder-with-3-jars-high-quality-original-imafqvf9vqqynbv2.jpeg?q=70" rating={3} />
            <Product id="123454" title="Dell-mouse" price={1499} image="https://support.content.office.net/en-us/media/e8384959-ad1a-1b95-762b-2861496b886e.png" rating={5}/>
            <Product id="123455" title= "dell keyboard wireless" price={2999} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7qeb76VnkIxciCk5gjxFwlsejKPkVmDOnPg&amp;usqp=CAU" rating={5}/>
        </div>
        <div className = "home__row">
            <Product id="123456" title="LG 4k Television with retina display etc." price={49999} image="https://www.lg.com/au/images/tvs/md05804009/gallery/UJ654T_d1_210917.jpg" rating={5}/>
            
        </div>

        </div>
    </div>
}

export default Home;