import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";

export default function Testimonial() {

    const responsive = {
        // allDevices: {
        //     breakpoint: { max: 4000, min: 0 },
        //     items: 3
        // }

        desktop: {
            breakpoint: { max: 4000, min: 1200 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 992, min: 0 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1
        }
    };

    const testimonials = [
        {
            text: "Dr. Kunjit's Ayurveda Clinic has been a sanctuary for my health. The personalized care and expert guidance have made a significant impact on my well-being. The holistic approach to treatment and the effective herbal remedies have set this clinic apart. Grateful for the transformative journey towards health and balance.",
            clientName: "~ Alok Singhania",
        },
        {
            text: "Dr. Kunjit's Ayurveda expertise has been instrumental in my healing journey. The comprehensive consultations and well-crafted treatment plans have addressed my health concerns with precision. The warm and friendly atmosphere at the clinic adds to the overall therapeutic experience. Highly recommend for anyone seeking authentic Ayurvedic care.",
            clientName: "~ Ananya Verma",
        },
        {
            text: "Choosing Dr. Kunjit's Ayurveda Clinic was one of the best decisions for my health. The skilled practitioners and traditional Ayurvedic treatments have brought about positive changes in my life. The clinic's commitment to promoting natural healing aligns perfectly with the principles of Ayurveda. Grateful for their dedication to holistic well-being.",
            clientName: "~ Arjun Kapoor",
        },
        {
            text: "Dr. Kunjit's Ayurveda Clinic is a beacon of healing. The personalized attention, in-depth consultations, and the integration of Ayurvedic principles into my daily life have made a remarkable difference. The emphasis on preventive care and natural remedies has empowered me to take charge of my health. Thank you for the invaluable support on my Ayurvedic journey.",
            clientName: "~ Sneha Patel",
        },
        {
            text: "Dr. Kunjit's Ayurveda Clinic has been my trusted partner in achieving optimal health. The knowledgeable team's commitment to Ayurvedic principles and personalized care has been commendable. The herbal formulations prescribed have not only alleviated my symptoms but have also fostered a deeper connection with my overall well-being. Grateful for the authentic Ayurvedic experience and the positive impact it has had on my life.",
            clientName: "~ Sunil Sharma",
        }
    ];

    return (
        <Wrapper>
            <div className="testimonial-span" id="testimonial-span">
                <div className="container">
                    <div className="testimonial-head theme-heading heading-right">
                        <span></span>
                        <h2>Testimonials</h2>
                    </div>
                    <div className="testimonial-con">

                        <Carousel
                            responsive={responsive}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={4000}
                            draggable={true}
                            showDots={false}
                            itemClass="carousel-item-padding"
                            containerClass="carousel-container-padding"
                        >
                            {testimonials.map((testimonial, index) => (
                                <div className="testimonial-con-wp flex" key="index">
                                    <span>”</span>
                                    <div className="testimonial-single">
                                        <p>{testimonial.text}</p>
                                        <div className="client-name">
                                            <strong><em>{testimonial.clientName}</em></strong>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </Wrapper>
    )

}

const Wrapper = styled.section`
    .testimonial-span {

        .testimonial-head{
            margin-bottom: 0;
        }

        .testimonial-con {
            padding: 10px;
            position: relative;
            z-index: 9999;

            .testimonial-con-wp {
                background-color: ${({ theme }) => theme.colors.primaryColor};
                padding: 50px;
                // min-height: 315px;
                min-height: 100%;
                z-index: 999999;
                position: relative;
                border-radius: 0 120px 0 120px;
                position: relative;
                transition: 0.25s;
                
                span{
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 300px;
                    color: #fff;
                    opacity: 0.1;
                }
    
                .testimonial-single {
    
                    p,
                    strong {
                        color: #fff;
                        font-size: ${({ theme }) => theme.fontSize.textFontSize};
                    }
    
                    .client-name {
                        position: absolute;
                        left: 50%;
                        bottom: -10px;
                        transform: translateX(-50%);
                        
                        strong{
                            background-color: ${({ theme }) => theme.colors.tertiaryColor};
                            color: ${({ theme }) => theme.colors.primaryColor};
                            border: 1.5px solid ${({ theme }) => theme.colors.primaryColor};
                            padding: 8px 40px;
                            font-size: ${({ theme }) => theme.fontSize.textFontSize};
                            border-radius: 0 175px 0 175px;
                            display: inline-block;
                            margin-top: -20px;
                            transition: 0.25s;
                        }
                    }
                }
            }

            .testimonial-con-wp:hover{
                border-radius: 120px 0 120px 0;
            }

            .testimonial-con-wp:hover .client-name strong{
                border-radius: 175px 0 175px 0;
            }

            .react-multi-carousel-list{
                // min-height: 450px;
                padding: 100px 0;
            }

            .react-multiple-carousel__arrow {
                background: ${({ theme }) => theme.colors.primaryColor};
                color: #000;
                border-radius: 0;
            }
    
            .react-multiple-carousel__arrow--left {
                right: 80px;
                top: 20px;
                left: auto;
            }
    
            .react-multiple-carousel__arrow--right {
                right: 20px;
                top: 20px;
                left: auto;
            }
    
            .react-multi-carousel-dot--active button {
                background-color: ${({ theme }) => theme.colors.primaryColor};
            }
        }
    }

    .carousel-item-padding {
        padding: 0 10px; /* Adjust the value as needed */
    }
    
    .carousel-container-padding {
        margin: 0 -10px; /* Match the padding value used for .carousel-item-padding */
    }
    
`;