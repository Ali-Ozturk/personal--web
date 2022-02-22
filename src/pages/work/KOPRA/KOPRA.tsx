import React from 'react';
import WorkPageLayout from "../_layout";
import KopraPageOne from "./pages/KopraPageOne";
import KopraPageTwoAndThree from "./pages/KopraPageTwoAndThree";
import KopraSlidingGradient from "./pages/KopraSlidingGradient";
import KopraPageFour from "./pages/KopraPageFour";

const KopraPage: React.FC = () => {
    return (
        <WorkPageLayout>
            <KopraPageOne />

            <KopraPageTwoAndThree />

            <KopraSlidingGradient />

            <KopraPageFour />

            <KopraSlidingGradient />
        </WorkPageLayout>
    );
};

export default KopraPage;