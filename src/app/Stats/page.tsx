"use client";
import Image from "next/image";
import React from "react";
import "../../styles/Statistique.css";
import asset from '../../../public/Assests/images/VectorStats.svg'
import asset1 from '../../../public/Assests/images/etoile.svg'
import asset2 from '../../../public/Assests/images/Getoiles.svg'
import asset3 from '../../../public/Assests/images/tick.svg'
import NavBar from "@/componnents/NavBar";
import Footer from "@/componnents/Footer";


const Stats = () => {
  return (
    <div>
      <div><NavBar/></div>
      <div className="stats-page">
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="overlap-group">
              <div className="text-wrapper-8">Top Market Statistics</div>
            </div>
            <p className="the-top-nfts-on">
              The top NFTs on _________&nbsp;&nbsp;, ranked by volume, floor
              price and other statistics.
            </p>
            <div className="overlap-2">
              <div className="statistics">
                <div className="text-wrapper-9">Collection</div>
                <div className="frame">
                  <div className="text-wrapper-10">Volume</div>
                  <div className="text-wrapper-10">24H%</div>
                  <div className="text-wrapper-10">7D%</div>
                  <div className="text-wrapper-10">Floor Price</div>
                  <div className="text-wrapper-10">Owners</div>
                  <div className="text-wrapper-10">Items</div>
                </div>
                <div className="line-6"></div>
                <div className="group">
                  <div className="group-2">
                    <img className="photo" width = {10} height = {20} alt="Photo" src="photo-1.png" />
                    <div className="text-wrapper-11">Adidas</div>
                    <div className="overlap-group-wrapper">
                      <div className="overlap-group-2">
                        <div className="ellipse" />
                        <Image className="vector" alt="Vector" src={asset3} />
                      </div>
                    </div>
                  </div>
                  <div className="line-6"></div>

                  <div className="group-3">
                    <Image className="vector-2" alt="Vector" src={asset} />
                    <div className="text-wrapper-12">27,966.76</div>
                  </div>
                  <div className="line-6"></div>

                  <div className="group-4">
                    <Image className="vector-2" alt="Vector" src={asset} />
                    <div className="text-wrapper-12">12.99</div>
                  </div>
                  <div className="text-wrapper-13">5.9K</div>
                  <div className="text-wrapper-14">10K</div>
                  <div className="text-wrapper-15">+92.96</div>
                  <div className="text-wrapper-16">-16.38</div>
                </div>
                <div className="line-6"></div>

                <div className="group-5">
                  <div className="line-6"></div>
                  <div className="group-6">
                    <img className="photo" alt="Photo" src={asset1} />
                    <div className="text-wrapper-11">Nike</div>
                    <div className="div-wrapper">
                      <div className="overlap-group-2">
                        <div className="ellipse" />
                        <img className="vector" alt="Vector" src={asset3} />
                      </div>
                    </div>
                  </div>
                  <div className="group-3">
                    <img className="vector-2" alt="Vector" src={asset} />
                    <div className="text-wrapper-12">27,966.76</div>
                  </div>
                  <div className="group-4">
                    <img className="vector-2" alt="Vector" src={asset} />
                    <div className="text-wrapper-12">12.99</div>
                  </div>
                  <div className="text-wrapper-13">5.9K</div>
                  <div className="text-wrapper-14">10K</div>
                  <div className="text-wrapper-15">+92.96</div>
                  <div className="text-wrapper-16">-16.38</div>
                </div>
                <div className="line-6"></div>

                <div className="group-7">
                  <div className="group-8">
<<<<<<< HEAD
                    <img className="photo" alt="Photo" src="photo-1-2.png" />
=======
                    {/* <Image className="photo" alt="Photo" src="photo-1-2.png" /> */}
>>>>>>> 29e74aa27a51c5f4a4e2befdb1c95260abe44626
                    <div className="text-wrapper-11">Lacoste</div>
                    <div className="group-9">
                      <div className="overlap-group-2">
                        <div className="ellipse" />
                        <img className="vector" alt="Vector" src={asset3} />
                      </div>
                    </div>
                  </div>
                  <div className="group-3">
                    <img className="vector-2" alt="Vector" src={asset} />
                    <div className="text-wrapper-12">27,966.76</div>
                  </div>
                  <div className="group-4">
                    <img className="vector-2" alt="Vector" src={asset} />
                    <div className="text-wrapper-12">12.99</div>
                  </div>
                  <div className="text-wrapper-13">5.9K</div>
                  <div className="text-wrapper-14">10K</div>
                  <div className="text-wrapper-15">+92.96</div>
                  <div className="text-wrapper-16">-16.38</div>
                </div>
                <div className="group-10">
                  <div className="line-6"></div>

                  <div className="group-11">
<<<<<<< HEAD
                    <img className="photo" alt="Photo" src="photo-1-3.png" />
=======
                    {/* <Image className="photo" alt="Photo" src="photo-1-3.png" /> */}
>>>>>>> 29e74aa27a51c5f4a4e2befdb1c95260abe44626
                    <div className="text-wrapper-11">Zalando</div>
                    <div className="group-12">
                      <div className="overlap-group-2">
                        <div className="ellipse" />
                        <img className="vector" alt="Vector" src={asset3} />
                      </div>
                    </div>
                  </div>
                  <div className="group-3">
                    <img className="vector-2" alt="Vector" src={asset} />
                    <div className="text-wrapper-12">27,966.76</div>
                  </div>
                  <div className="group-4">
                    <img className="vector-2" alt="Vector" src={asset} />
                    <div className="text-wrapper-12">12.99</div>
                  </div>
                  <div className="text-wrapper-13">5.9K</div>
                  <div className="text-wrapper-14">10K</div>
                  <div className="text-wrapper-15">+92.96</div>
                  <div className="text-wrapper-16">-16.38</div>
                </div>
                <div className="group-13">
                  <div className="line-6"></div>

                  <div className="group-14">
<<<<<<< HEAD
                    <img className="photo" alt="Photo" src="photo-1-4.png" />
=======
                    {/* <Image className="photo" alt="Photo" src="photo-1-4.png" /> */}
>>>>>>> 29e74aa27a51c5f4a4e2befdb1c95260abe44626
                    <div className="text-wrapper-11">Zara</div>
                    <div className="group-15">
                      <div className="overlap-group-2">
                        <div className="ellipse" />
                        <img className="vector" alt="Vector" src={asset3} />
                      </div>
                    </div>
                  </div>
                  <div className="group-3">
                    <img className="vector-2" alt="Vector" src={asset} />
                    <div className="text-wrapper-12">27,966.76</div>
                  </div>
                  <div className="group-4">
                    <img className="vector-2" alt="Vector" src={asset} />
                    <div className="text-wrapper-12">12.99</div>
                  </div>
                  <div className="text-wrapper-13">5.9K</div>
                  <div className="text-wrapper-14">10K</div>
                  <div className="text-wrapper-15">+92.96</div>
                  <div className="text-wrapper-16">-16.38</div>
                </div>
                <div className="group-16">
                  <div className="line-6"></div>

                  <div className="group-17">
<<<<<<< HEAD
                    <img className="photo" alt="Photo" src="photo-1-5.png" />
=======
                    {/* <Image className="photo" alt="Photo" src="photo-1-5.png" /> */}
>>>>>>> 29e74aa27a51c5f4a4e2befdb1c95260abe44626
                    <div className="text-wrapper-11">Cartier</div>
                    <div className="group-18">
                      <div className="overlap-group-2">
                        <div className="ellipse" />
                        <img className="vector" alt="Vector" src={asset3} />
                      </div>
                    </div>
                  </div>
                  <div className="group-3">
                    <img className="vector-2" alt="Vector" src={asset} />
                    <div className="text-wrapper-12">27,966.76</div>
                  </div>
                  <div className="group-4">
                    <img className="vector-2" alt="Vector" src={asset} />
                    <div className="text-wrapper-12">12.99</div>
                  </div>
                  <div className="text-wrapper-13">5.9K</div>
                  <div className="text-wrapper-14">10K</div>
                  <div className="text-wrapper-15">+92.96</div>
                  <div className="text-wrapper-16">-16.38</div>
                </div>
                <div className="group-19">
                  <div className="line-6"></div>

                  <div className="group-8">
<<<<<<< HEAD
                    <img className="photo" alt="Photo" src="photo-1-6.png" />
=======
                    {/* <Image className="photo" alt="Photo" src="photo-1-6.png" /> */}
>>>>>>> 29e74aa27a51c5f4a4e2befdb1c95260abe44626
                    <div className="text-wrapper-11">Hermes</div>
                    <div className="group-20">
                      <div className="overlap-group-2">
                        <div className="ellipse" />
                        <img className="vector" alt="Vector" src={asset2} />
                      </div>
                    </div>
                  </div>
                  <div className="group-3">
                    <img className="vector-2" alt="Vector" src={asset} />
                    <div className="text-wrapper-12">27,966.76</div>
                  </div>
                  <div className="group-4">
                    <img className="vector-2" alt="Vector" src={asset} />
                    <div className="text-wrapper-12">12.99</div>
                  </div>
                  <div className="text-wrapper-13">5.9K</div>
                  <div className="text-wrapper-14">10K</div>
                  <div className="text-wrapper-15">+92.96</div>
                  <div className="text-wrapper-16">-16.38</div>
                </div>
                <div className="group-21">
                  <div className="text-wrapper-17">1</div>
                  <div className="text-wrapper-18">2</div>
                  <div className="text-wrapper-19">3</div>
                  <div className="text-wrapper-20">4</div>
                  <div className="text-wrapper-21">5</div>
                  <div className="text-wrapper-22">6</div>
                  <div className="text-wrapper-23">7</div>
                </div>
              </div>
              <div className="group-22">
<<<<<<< HEAD
                <img className="line-7" alt="Line" src="line-372.svg" />
                <img className="line-8" alt="Line" src="line-373.svg" />
                <img className="line-9" alt="Line" src="line-374.svg" />
                <img className="line-10" alt="Line" src="line-375.svg" />
                <img className="line-11" alt="Line" src="line-376.svg" />
                <img className="line-12" alt="Line" src="line-377.svg" />
=======
                {/* <Image className="line-7" alt="Line" src="line-372.svg" />
                <Image className="line-8" alt="Line" src="line-373.svg" />
                <Image className="line-9" alt="Line" src="line-374.svg" />
                <Image className="line-10" alt="Line" src="line-375.svg" />
                <Image className="line-11" alt="Line" src="line-376.svg" />
                <Image className="line-12" alt="Line" src="line-377.svg" /> */}
>>>>>>> 29e74aa27a51c5f4a4e2befdb1c95260abe44626
              </div>
              <img className="group-23" alt="Group" src={asset2} />
                        <img className="vector-3" alt="Vector" src={asset1} />
                        <img className="vector-4" alt="Vector" src={asset1}/>
                        <img className="vector-5" alt="Vector" src={asset1} />
            </div>
            <div className="frame-2">
              <div className="group-24">
                <div className="overlap-group-3">
                  <div className="text-wrapper-24">Last 7 Days</div>
<<<<<<< HEAD
                  <img className="vector-6" alt="Vector" src="vector-21.svg" />
=======
                  {/* <Image className="vector-6" alt="Vector" src="vector-21.svg" /> */}
>>>>>>> 29e74aa27a51c5f4a4e2befdb1c95260abe44626
                </div>
              </div>
              <div className="group-25">
                <div className="overlap-group-3">
                  <div className="text-wrapper-24">All Categories</div>
<<<<<<< HEAD
                  <img className="vector-6" alt="Vector" src="vector-22.svg" />
=======
                  {/* <Image className="vector-6" alt="Vector" src="vector-22.svg" /> */}
>>>>>>> 29e74aa27a51c5f4a4e2befdb1c95260abe44626
                </div>
              </div>
            </div>
            <div className="frame-3">
              <div className="frame-4">
<<<<<<< HEAD
                <img className="vector-7" alt="Vector" src="vector-23.svg" />
=======
                {/* <Image className="vector-7" alt="Vector" src="vector-23.svg" /> */}
>>>>>>> 29e74aa27a51c5f4a4e2befdb1c95260abe44626
                <div className="text-wrapper-25">1 - 100</div>
              </div>
              <div className="frame-4">
                <div className="text-wrapper-26">101 - 200</div>
<<<<<<< HEAD
                <img className="vector-8" alt="Vector" src="vector-24.svg" />
              </div>
            </div>
            <img className="line-13" alt="Line" src="line-378.svg" />
=======
                {/* <Image className="vector-8" alt="Vector" src="vector-24.svg" /> */}
              </div>
            </div>
            {/* <Image className="line-13" alt="Line" src="line-378.svg" /> */}
>>>>>>> 29e74aa27a51c5f4a4e2befdb1c95260abe44626

            <div className="frame-6">
              <div className="text-wrapper-33">Marketplace Perfomence</div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default Stats