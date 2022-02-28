import React from 'react';
import WorkPageLayout from "../_layout";
import KopraPageOne from "./pages/KopraPageOne";
import KopraPageTwoAndThree from "./pages/KopraPageTwoAndThree";
import KopraSlidingGradient from "./pages/KopraSlidingGradient";
import KopraPageFour from "./pages/KopraPageFour";
import KopraPageFive from "./pages/KopraPageFive";
import KopraTechnologies from "../../../components/KOPRA/KopraTechnologies";

const KopraPage: React.FC = () => {
    return (
        <WorkPageLayout>
            <KopraPageOne/>

            <KopraPageTwoAndThree/>

            <KopraSlidingGradient>
                <blockquote className="blockquote">
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                        ante.</p>
                    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source
                        Title</cite></footer>
                </blockquote>
            </KopraSlidingGradient>

            <KopraPageFour/>

            <KopraSlidingGradient>
                <KopraTechnologies/>
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
