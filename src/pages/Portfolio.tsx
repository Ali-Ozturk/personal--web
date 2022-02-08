import React, {MutableRefObject, useEffect, useRef} from 'react';
import img from '../assets/images/example-pic.png';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
                    <img src={img} className="col-md-8"/>
                    <div className="col-6 col-md-4">
                        <div className="row gx-5 gy-5">
                            <img src={img} className="col-12"/>
                            <img src={img} className="col-12"/>
                        </div>
                    </div>
                    <img src={img} className="col-6"/>
                    <img src={img} className="col-6"/>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
