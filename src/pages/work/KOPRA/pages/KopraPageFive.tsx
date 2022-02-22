import React from 'react';
import UnknownPicture from "../../../../assets/images/KOPRA/team/unknown.jpg";
import MikkelPicture from "../../../../assets/images/KOPRA/team/pb_linkedin_mikkel.jpg";
import AliPicture from "../../../../assets/images/KOPRA/team/pb_linkedin_ali.jpg";
import ProfileCard from "../../../../components/KOPRA/ProfileCard";

const KopraPageFive = () => {
    return (
        <section className={'one-page d-flex flex-column align-items-center'}>

            <h3 className={'text-uppercase fw-bold font-monospace py-8'}
                style={{letterSpacing: '.6rem'}}>
                Developers
            </h3>

            <div className={'row gx-5'}>
                <div className={'col-4'}>
                    <ProfileCard image={AliPicture} name={'Alihan Øztürk'} title={'Project Manager'}/>
                </div>
                <div className={'col-4'}>
                    <ProfileCard image={MikkelPicture} name={'Mikkel Kuntz'} title={'Full Stack Developer'}/>
                </div>
                <div className={'col-4'}>
                    <ProfileCard image={UnknownPicture} name={'Christopher Krejler'} title={'Backend Developer'}/>
                </div>
            </div>

        </section>
    );
};

export default KopraPageFive;