import React from 'react';
import styled from "styled-components";

export type SocialDetails = {
    url: string;
    icon: any;
}

type PropsFromParent = {
    image: string;
    name: string;
    title: string;
    socials?: SocialDetails[];
}

const ProfileCard: React.FC<PropsFromParent> = ({image, name, title, socials}) => {
    return (
        <CardWrapper className="card text-center position-relative">
            <CardHeader className="card-header"/>

            <TeamPicture className={'m-auto'} image={image}/>

            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{title}</p>
            </div>

            <div className="card-footer">
                {socials?.sort((a, b) => a.url.localeCompare(b.url)).map((social, key) => {
                    return <SocialIcon target={'_blank'} href={social.url} className={'m-2 h5 text-decoration-none'}
                                       rel="noreferrer"> {social.icon} </SocialIcon>
                })}
            </div>
        </CardWrapper>
    );
};

const SocialIcon = styled.a`
  color: #8E8E8E;
  font-size: 1.2rem;
`

const CardWrapper = styled.div`
  width: 15rem;
  height: 20rem;
`

const TeamPicture = styled.div<{ image: string }>`
  // Background details
  background: url(${props => props.image}) no-repeat;
  background-position: center;
  background-size: cover;
  background-color: red;

  margin-top: -2.5rem !important;

  outline: 4px solid white;
  filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.1));
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
`

const CardHeader = styled.div`
  height: 5rem;
  border-bottom: none;
  background: linear-gradient(277.74deg, #C5DEF5 0%, #A8FFFF 100%);
`

export default ProfileCard;
