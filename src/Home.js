import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image" 
                src="https://images-fe.ssl-images-amazon.com/images/G/35/digital/video/merch/2020/Other/BRND_MTH20_00000_GWBleedingHero_3000x1200_Final_en-AU_ENG_PVD5390._CB406173983_.jpg"
                alt="amazon prime background"
            />

            {/* Product id, title, price, rating, image*/}
            <div className="home__row">
                <Product 
                    id="98765"
                    title="Mac 2020 pro"
                    price={1850.98}
                    rating={5}
                    image="data:image/jpeg;base64,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" 
                />
                <Product 
                    id="48375"
                    title="Airpods Pro with Active Noise Cancellation"
                    price={215}
                    rating={4}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTi3otMeo6Xn0-8P716jnDJUr5UWXI5la3SHA&usqp=CAU" 
                />
            </div>
            <div className="home__row">
                <Product 
                    id="345678"
                    title="Orient 'Bambino Version IV' Japanese Automatic Stainless Steel and Leather Dress Watch"
                    price={250}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/61hsjqmi4RL._AC_UL640_FMwebp_QL65_.jpg" 
                />
                <Product 
                    id="1232343"
                    title="Canon PowerShot SX430IS Digital Camera(SX430IS) 3 Inch display,Black (Australian warranty)"
                    price={190}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/71l3Fr8bCjL._AC_UL640_FMwebp_QL65_.jpg" 
                />
                <Product 
                    id="1232343"
                    title=" Start with Why : How Great Leaders inspire Everyone to Take action "
                    price={10}
                    rating={5}
                    image="https://images-fe.ssl-images-amazon.com/images/I/51ncTHsPF4L._AC_AA436_FMwebp_QL65_.jpg" 
                />
            </div>
            <div className="home__row">
                <Product 
                    id="123234"
                    title="Guerlain La Petite Robe Noire Couture 50ml"
                    price={486.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41Io0EovflL._AC_UL640_FMwebp_QL65_.jpg" 
                />
            </div>
        </div>
    )
}

export default Home;