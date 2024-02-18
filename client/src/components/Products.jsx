import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import ProductCategory from './ProductCategory';
import oil1 from '../assets/images/ayurvedic-oil-1.jpg';
import oil2 from '../assets/images/ayurvedic-oil-2.jpg';
import oil3 from '../assets/images/ayurvedic-oil-3.jpg';
import oil4 from '../assets/images/ayurvedic-oil-4.jpg';
import churna1 from '../assets/images/ayurvedic-churna-1.jpg';
import churna2 from '../assets/images/ayurvedic-churna-2.jpg';
import churna3 from '../assets/images/ayurvedic-churna-3.jpg';
import churna4 from '../assets/images/ayurvedic-churna-4.jpg';
import capsule1 from '../assets/images/ayurvedic-capsule-1.jpg';
import capsule2 from '../assets/images/ayurvedic-capsule-2.jpg';
import capsule3 from '../assets/images/ayurvedic-capsule-3.jpg';
import capsule4 from '../assets/images/ayurvedic-capsule-4.jpg';
import supplement1 from '../assets/images/ayurvedic-supplement-1.jpg';
import supplement2 from '../assets/images/ayurvedic-supplement-2.jpg';
import supplement3 from '../assets/images/ayurvedic-supplement-3.jpg';
import supplement4 from '../assets/images/ayurvedic-supplement-4.jpg';

export default function Products() {

    const productData =
    {
        oil: [
            {
                image: oil1,
                name: "AyurGlow Herbal Oil",
            },
            {
                image: oil2,
                name: "Vata-Balancing Sesame Blend",
            },
            {
                image: oil3,
                name: "Pitta-Soothing Coconut Infusion",
            },
            {
                image: oil4,
                name: "Kapha-Harmonizing Almond Essence",
            }
        ],

        churna: [
            {
                image: churna1,
                name: "Digestive Harmony Churna",
            },
            {
                image: churna2,
                name: "Immunity Boost Churna",
            },
            {
                image: churna3,
                name: "Energy Boost Churna",
            },
            {
                image: churna4,
                name: "Pain Relief Churna",
            },
        ],

        capsules: [
            {
                image: capsule1,
                name: "Vitality Capsules",
            },
            {
                image: capsule2,
                name: "Energy Boost Capsules",
            },
            {
                image: capsule3,
                name: "Digestive Wellness Capsules",
            },
            {
                image: capsule4,
                name: "Relaxation Capsules",
            },
        ],

        supplements: [
            {
                image: supplement1,
                name: "Herbal Vitamin Supplement",
            },
            {
                image: supplement2,
                name: "Joint Support Supplement",
            },
            {
                image: supplement3,
                name: "Heart Health Supplement",
            },
            {
                image: supplement4,
                name: "Immune System Booster",
            },
        ],
    };

    const [showProduct, setShowProduct] = useState(productData.oil);

    const handleTabClick = (tab) => {
        setShowProduct(() => {
            return productData[tab];
        })
    };

    // console.log(showProduct);

    return (
        <Wrapper className='space-bottom'>
            <div className="container">
                <div className="pr-head theme-heading heading-left">
                    <h2>Our Products</h2>
                    <span></span>
                </div>
                <div className="pr-body">
                    <div className="pr-tab">
                        <ul>
                            <li>
                                <NavLink
                                    className='btn'
                                    onClick={() => handleTabClick('oil')}
                                >
                                    Oil
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className='btn'
                                    onClick={() => handleTabClick('churna')}
                                >
                                    Churna
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className='btn'
                                    onClick={() => handleTabClick('capsules')}
                                >
                                    Capsules
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className='btn'
                                    onClick={() => handleTabClick('supplements')}
                                >
                                    Supplement
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="pr-display">
                        <ProductCategory data={showProduct} />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`

    padding: 80px 0;
    background-color: ${({theme}) => theme.colors.primaryColor};

    .pr-head{
        h2{
            color: ${({ theme }) => theme.colors.secondaryColor};
        }

        span{
            background-color: ${({ theme }) => theme.colors.secondaryColor};
            &::after{
                background-color: ${({ theme }) => theme.colors.secondaryColor};
            }
        }
    }

    .pr-body{
        margin-top: 50px;
    }

    .pr-tab{
        ul{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 40px;
        }

        ul li a{
            display: inline-block;
            min-width: 160px;
            text-align: center;
        }
    }
`;