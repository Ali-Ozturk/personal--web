import React from 'react';
import WorkPageLayout from "../_layout";
import KopraPageOne from "./pages/KopraPageOne";
import KopraPageTwoAndThree from "./pages/KopraPageTwoAndThree";
import KopraSlidingGradient from "./pages/KopraSlidingGradient";
import KopraPageFour from "./pages/KopraPageFour";
import KopraPageFive from "./pages/KopraPageFive";

const KopraPage: React.FC = () => {
    return (
        <WorkPageLayout>
            <KopraPageOne/>

            <KopraPageTwoAndThree/>

            <KopraSlidingGradient>
                <h3 className={'text-muted text-uppercase fw-bold font-monospace py-8'}
                    style={{letterSpacing: '.6rem'}}>
                    Something here
                </h3>
            </KopraSlidingGradient>

            <KopraPageFour/>

            <KopraSlidingGradient>
                <h3 className={'text-muted text-uppercase fw-bold font-monospace py-8'}
                    style={{letterSpacing: '.6rem'}}>
                    Something here
                </h3>
            </KopraSlidingGradient>

            <KopraPageFive/>

            <KopraSlidingGradient inverse={true}>
                <h3 className={'text-muted text-uppercase fw-bold font-monospace py-8'}
                    style={{letterSpacing: '.6rem'}}>
                    Something here
                </h3>
            </KopraSlidingGradient>
        </WorkPageLayout>
    );
};

export default KopraPage;