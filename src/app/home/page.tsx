"use client"
import React, { FunctionComponent, useState, useEffect } from 'react'
import '../../styles/Home.css'
import adidas from '../../../public/Assests/images/adidas.png'
import puma from '../../../public/Assests/images/puma.png'
import lacoste from '../../../public/Assests/images/lacoste.png'
import FashionThatSpeaks from '../../../public/Assests/images/FashionThatSpeaks.png'
import noGasFees from '../../../public/Assests/images/noGasFees.png'
import carbonNeturalNFTs from '../../../public/Assests/images/carbonNeturalNFTs.png'
import fastNEasyTrans from '../../../public/Assests/images/fastNEasyTrans.png'
import allImgs from '../../../public/Assests/images/allImgs.png'
import Image from 'next/image'

// import ClientCard from '../components/BrandCard'

// import { Link } from 'react-router-dom'

// import { data } from '../torbagaDummyData' //this line will be deleted when we import the real data from redux's store
// import ProductCard from '../components/NewTrending'
import Footer from '../../componnents/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { getUser } from '@/store/signinReduser'
import Link from 'next/link'
import NavBar from '@/componnents/NavBar'
// import { RootState, AppDispatch } from '../store'
// import { fetchProducts } from '../components/ProductData/productData'

// import { fetchUsers } from '../components/UsersData/UsersData'


// import UpcomingBrands from '../components/UpcomingBrands'
// import axios from 'axios'
// import FashionCard from '../components/FashionistaCard'
// import FashionistaCard from '../components/UpcomigCreators'
// import ProductCardContainer from '../components/NewTrending'

interface UpcomingBrandsProps {
    users: User[];
}


enum Category {
    Men = "men",
    Women = "women",
    Kids = "kids",
    Other = "other"
}

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: Category,
    UserId: number,
}
interface User {
    id: number;
    name: string;
    role: string;
    image: string;
    followers: number;
    following: boolean;
}
////////////////////////////////////////////////////////////////
enum Role {
    follower = "follower",
    brand = "brand",
    fashionista = "fashionista"
}
interface User {
    id: number;
    name: string;
    image: string;
    email: number;
    password: string
    Role: Role
    role: string

}



const Home = () => {



    const dispatch: AppDispatch = useDispatch()

    // const products = useSelector((state: RootState) => state.products.products)
    // console.log(products, 'those are products');

    // useEffect(() => {
    //     dispatch(fetchProducts())
    // }, [])







    const [brands, setBrands] = useState<User[]>([]);

    // useEffect(() => {
    //     axios.get<User[]>("http://localhost:5000/api/user/getUserByRole/brand").then((response) => {
    //         const users = response.data.map((user) => ({
    //             ...user,
    //             following: false,
    //         }));
    //         setBrands(users);
    //     });
    // }, []);




    return (
        <div>
            <NavBar />

            <div>
                <div id='homePage'>

                    <div className="topSectionBtns">
                        <button className='mainColl'>Main Collection</button>
                        <button className='creatorsMarket'>Creators Market</button>
                    </div>
                    <div className='bottomSection'>
                        <span className='secondSection'>
                            <span className='leftSection'>
                                <h1>Clothes are the Spirit of Fation</h1>
                                <p className='lightParag' >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <div className='buttons'>
                                    {/* <Link to="/explore" >  <button className='explore'>Explore Now</button></Link>
                                    <Link to='/createProduct'><button className='create'>Create</button></Link> */}
                                </div>
                                <div id="statistics">
                                    <span>
                                        <h4>
                                            100+
                                        </h4>
                                        <h5 className='lightParag' >
                                            Brands
                                        </h5>
                                    </span>
                                    <span>
                                        <h4>
                                            20k+
                                        </h4>
                                        <h5 className='lightParag' >
                                            Fashion Designer
                                        </h5>
                                    </span>
                                    <span>
                                        <h4>
                                            60+
                                        </h4>
                                        <h5 className='lightParag' >
                                            Fashion shows
                                        </h5>
                                    </span>
                                </div>
                            </span>
                            <span className='rightSection'>
                                <Image src={allImgs} alt="" />
                            </span>
                        </span>
                        <div className='logos'>
                            <span>
                                <Image src={adidas} alt="adidas" />
                            </span>
                            <span>
                                <Image src={puma} alt="puma" />
                            </span>
                            <span>
                                <Image src={lacoste} alt="lacoste" />
                            </span>
                        </div>
                        <div className='aboutUs'>
                            <h2>
                                About Us
                            </h2>
                            <p className='lightParag' >Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className='fashionSpeaks'>
                            <span className='imgContainer'>
                                <span>
                                    <Image src={FashionThatSpeaks} alt="" />
                                </span>
                            </span>
                            <span className='description'>
                                <h2>
                                    Fashion That Speaks
                                </h2>
                                <p className='lightParag' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.</p>
                                <button className='showMore'>Show more</button>
                            </span>
                        </div>
                        <div>
                            <span className='allCollections'>
                                <h2>
                                    All Collections
                                </h2>
                                <p className='lightParag' >Worlds First Layer 2 Fashions Marketplace</p>
                            </span>
                            <span className='complexThings'>
                                <span>
                                    <Image src={noGasFees} alt="" />
                                    <p className='lightParag' >No Gas Fees</p>
                                </span>
                                <span>
                                    <Image src={carbonNeturalNFTs} alt="" />
                                    <p className='lightParag' >Carbon Netural NFTs</p>
                                </span>
                                <span>
                                    <Image src={fastNEasyTrans} alt="" />
                                    <p className='lightParag' >Fast And Easy Transactions</p>
                                </span>
                            </span>
                        </div>
                        <div>
                            <span className='categories'>
                                <h4>All Collections</h4>
                                <h4>Verified Brands</h4>
                                <h4>Verified Artists</h4>
                                <h4>New Drops</h4>
                                <h4>Live Shows</h4>
                            </span>
                            <span>
                                <div>

                                </div>

                            </span>
                            <span>
                                <h2>
                                    New & Trending
                                </h2>
                                <p className='lightParag' >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </span>
                            {/* products */}
                            <div className='productSection'>
                                {/* <ProductCardContainer /> */}
                            </div>
                            <span>
                                <h2>
                                    Upcoming Creators
                                </h2>
                                <p className='lightParag' >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </span>
                            <span>
                                {/* <FashionistaCard /> */}
                            </span>
                            <span>
                                <h2>
                                    Upcoming Brands
                                </h2>
                                <p className='lightParag' >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </span>
                            {/* <UpcomingBrands /> */}
                            <span>

                            </span>
                        </div>
                        <span>
                            <h2>
                                Freaquently Asked Questions
                            </h2>
                            <p className='lightParag' >Wanna Ask Something?</p>
                        </span>
                        <span className='supportQuest'>
                            <input type="text" placeholder='Lorem ipsum ipsum ?' />
                            <input type="text" placeholder='Lorem ipsum ipsum ?' />
                            <input type="text" placeholder='Lorem ipsum ipsum ?' />
                            <input type="text" placeholder='Lorem ipsum ipsum ?' />
                            <input type="text" placeholder='Lorem ipsum ipsum ?' />
                            <input type="text" placeholder='Lorem ipsum ipsum ?' />
                        </span>
                        <div className='getStarted'>
                            <h1>
                                Highest Quality Collection
                            </h1>
                            <button>Get Started</button>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home