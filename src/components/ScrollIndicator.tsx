import React, {useEffect} from 'react';


const ScrollIndicator: React.FC = () => {
    const [opacity, setOpacity] = React.useState(0);
    const scrollThreshold = 20;

    useEffect(() => {
        const timer = setTimeout(() => {
            const scrolled = document.documentElement.scrollTop;
            if (scrolled <= scrollThreshold) {
                setOpacity(.5);
            }
        }, 6000);

        return () => clearTimeout(timer);
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrolled = document.documentElement.scrollTop;

            if (scrolled > scrollThreshold){
                setOpacity(0)
            }
            else if (scrolled <= scrollThreshold){
                setOpacity(0.5)
            }
        });
    }, []);

    return (
        <div id="scroll-indicator" style={{opacity}}>
        </div>
    );
};

export default ScrollIndicator;
