import React from 'react';
import SlideInLeft from "../../../../assets/images/KOPRA/temp_slidein_left.png";
import SlideInRight from "../../../../assets/images/KOPRA/temp_slidein_right.png";
import styled from "styled-components";

const KopraPageTwoAndThree = () => {
    return (
        <>
            <div className={'one-page d-flex align-items-center'}>
                <div className={'row'}>
                    <div className={'col-6'}>
                        <SlideInPicture style={{
                            borderRadius: '0px 15px 15px 0px'
                        }} src={SlideInLeft} className={'w-100'}/>
                    </div>

                    <div className={'col-6 d-flex flex-column justify-content-center px-10'}>
                        <h3>Header text here</h3>
                        <small className={'text-muted text-justify'}>Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                            Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin
                            words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
                            classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
                            1.10.32
                            and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                            written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
                            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a
                            line in
                            section 1.10.32.</small>
                    </div>
                </div>
            </div>


            <div className={'one-page d-flex align-items-center'}>
                <div className={'row'}>
                    <div className={'col-6 d-flex flex-column justify-content-center px-10'}>
                        <h3 style={{textAlign: 'right'}}>Header text here</h3>
                        <small className={'text-muted text-justify'}>Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                            Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin
                            words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
                            classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
                            1.10.32
                            and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                            written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
                            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a
                            line in
                            section 1.10.32.</small>
                    </div>

                    <div className={'col-6'}>
                        <SlideInPicture style={{
                            borderRadius: '15px 0px 0px 15px'
                        }} src={SlideInRight} className={'w-100'}/>
                    </div>
                </div>
            </div>
        </>
    );
};

const SlideInPicture = styled.img`
  box-shadow: -10px 10px 30px 5px rgba(0, 0, 0, 0.25);
`

export default KopraPageTwoAndThree;