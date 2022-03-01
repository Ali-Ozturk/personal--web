import React from 'react';
import UnknownPicture from "../../../../assets/images/KOPRA/team/unknown.jpg";
import MikkelPicture from "../../../../assets/images/KOPRA/team/pb_linkedin_mikkel.jpg";
import AliPicture from "../../../../assets/images/KOPRA/team/pb_linkedin_ali.jpg";
import ProfileCard, {SocialDetails} from "../../../../components/KOPRA/ProfileCard";
import {FaDiscord, FaGithub, FaGoogle, FaLinkedin} from "react-icons/fa";

const KopraPageFive = () => {

    const aliSocials: SocialDetails[] = [
        {url: 'https://www.linkedin.com/in/alihanozturkdk/', icon: <FaLinkedin/>},
        {url: 'https://github.com/Ali-Ozturk/', icon: <FaGithub/>},
        {url: 'https://discord.com/users/212704614296977419/', icon: <FaDiscord/>},
        {url: 'mailto:aliozturk@outlook.dk', icon: <FaGoogle/>},
    ]
    const mikkelSocials: SocialDetails[] = [
        {url: 'https://www.linkedin.com/in/mikkel-kuntz/', icon: <FaLinkedin/>},
        {url: 'https://github.com/judo347/', icon: <FaGithub/>},
        {url: 'https://discord.com/users/149064699063828480/', icon: <FaDiscord/>},
        {url: 'mailto:mikkelhvk@hotmail.com', icon: <FaGoogle/>},
    ]
    const chrisSocials: SocialDetails[] = [
        {url: 'https://www.linkedin.com/in/alihanozturkdk/', icon: <FaLinkedin/>},
        {url: 'https://github.com/chriskrejler/', icon: <FaGithub/>},
        {url: 'https://discord.com/users/220114755157753856/', icon: <FaDiscord/>},
        {url: 'mailto:christopher@krejler.dk', icon: <FaGoogle/>},
    ]

    return (
        <section className={'one-page d-flex flex-column align-items-center'}>

            <h4 className={'text-uppercase fw-bold font-monospace py-8'}
                style={{letterSpacing: '.6rem'}}>
                Udviklerne
            </h4>

            <div className={'row gx-5'}>
                <div className={'col-4'}>
                    <ProfileCard image={AliPicture} name={'Alihan Øztürk'} title={'Project Manager'}
                                 socials={aliSocials}/>
                </div>
                <div className={'col-4'}>
                    <ProfileCard image={MikkelPicture} name={'Mikkel Kuntz'} title={'Full Stack Developer'}
                                 socials={mikkelSocials}/>
                </div>
                <div className={'col-4'}>
                    <ProfileCard image={UnknownPicture} name={'Christopher Krejler'} title={'Backend Developer'}
                                 socials={chrisSocials}/>
                </div>
            </div>

        </section>
    );
};

export default KopraPageFive;
