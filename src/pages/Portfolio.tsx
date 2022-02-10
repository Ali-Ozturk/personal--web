import React, {useEffect, useRef} from 'react';
import kopraFullsize from '../assets/images/kopra-design.jpg';
import madappFullsize from '../assets/images/madapp-desgin.jpg';
import madappFullsizeExtra from '../assets/images/madapp-hover.jpg';
import gsap from "gsap";
import PortfolioThumbnail from "../components/PortfolioThumbnail";

type PropsFromParent = JSX.IntrinsicElements["div"] & {}

const Portfolio: React.FC<PropsFromParent> = ({...props}) => {
    const portfolioRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (portfolioRef.current) {
            const element = portfolioRef.current;
            gsap.fromTo(
                element.querySelector(".testinggsap"),
                {
                    opacity: 0,
                    y: -20,
                },
                {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        start: "top top",
                        end: "bottom center",
                        scrub: true
                    }
                }
            );
        }
    }, []);

    return (
        <div ref={portfolioRef}>
            <div className="col-10 justify-content-center m-auto testinggsap" {...props}>
                <div className="row gx-5 gy-5">
                    <div className={'col-md-8'}>
                        <PortfolioThumbnail description={"KOPRA - Kontorelevernes praktiksystem"}
                                            thumbPicture={kopraFullsize}
                                            technologies={['Java', 'Spring', 'ReactJS']}
                                            partners={['Køge Handelsskole']}/>
                    </div>
                    <div className="col-6 col-md-4">
                        <div className="row gx-5 gy-5">
                            <div className={'col-12'}>
                                <PortfolioThumbnail description={"Testing thumbnail"} thumbPicture={madappFullsizeExtra}
                                                    hoverPicture={madappFullsize}
                                                    technologies={['React-Native', 'C#']}
                                                    partners={['Aalborg University']}/>
                            </div>
                            <div className={'col-12 bordered'}>
                                <PortfolioThumbnail description={"KOPRA Testing"}
                                                    thumbPicture={madappFullsize}
                                                    hoverPicture={kopraFullsize} technologies={['Example']}/>
                            </div>
                        </div>
                    </div>
                    <div className={'col-6'}>
                        <PortfolioThumbnail description={"New Software Name"}
                                            thumbPicture={kopraFullsize}
                                            hoverPicture={kopraFullsize} technologies={['Example']}/>
                    </div>
                    <div className={'col-6'}>
                        <PortfolioThumbnail description={"An elegant transition"}
                                            thumbPicture={kopraFullsize}
                                            hoverPicture={kopraFullsize} technologies={['Example']}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
