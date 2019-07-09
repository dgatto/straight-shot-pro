import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class ControlledCarousel extends React.Component {
    render() {
        return (
            <Carousel
                showThumbs={false}
                showStatus={false}
                interval={4000}
                transitionTime={700}
                infiniteLoop={true}
                autoPlay={true}>
                <div>
                    <img src="https://previews.dropbox.com/p/thumb/AAfqrfmPpM49P4gr_DAeR4aSpQQkonoFuLcRs6fRm1Oocviht5WyvOytX29cTtROX0LiSCZfcBmwfWiqfU-SW2LzzC4kzAqjeySGHA0V7O85rL2MiGAEH1mleeqwND0eYdq5sBQucHtWNh_DAvDox2eJ0lJEVC1Xv7T2pxXWoylnRwe8tZXghSy0P81LpTPpEiBt8F5EmfQMaa5BpeC_2rlvOKFnOvVrIvYlyFp8JeFh2BVMWpRK-Z_05qBFOF6UHy_WB1pCsSYs9EqYX_Th_eJcMDLNk7iBsgffZMaajGBS2kantW5nd9HR1k3EaZ-Sq2aHSDiQ1m16gPQcWL7YL3O5LlKo7ooXVn033BAZJE0csw/p.jpeg?fv_content=true&size_mode=5" />
                </div>
                <div>
                    <img src="https://previews.dropbox.com/p/thumb/AAcDg9SUY8FEXzs0LdvV1bkGoY0qtOUmOd0lgRn0X2T5zrhqEjBxbDgIk977pEhyxa-zCNAsgSMDTQTuu4L_ApYQoR0X4SJxcTrCeZgXuCfVMJsJ0eEM96bBCkOampKQi4wuJ56tjvprxh6kSjXKSLav57j01izAFjYFUtAd5FgbPTzcOzfp6Z8dG3G2m9KYHPYxq71QtXrSNq1JDH5dcuBO9x16iujjPOjJ-dwutEDBsMUM8X12DGV96gR_lKSQmRDcQnePbgCE4F5yLSdfhTpHYqpqG0Aqpb3veedYo0ZqGstB-8EquLWylbr-DCVLrf9xxsr8ooas7ucPRoHow2hfBft-QnSaVZaGlSW6eYugHQ/p.jpeg?fv_content=true&size_mode=5" />
                </div>
                <div>
                    <img src="https://previews.dropbox.com/p/thumb/AAdtB9skPNHhyQAvaGmvUV_3CtSTDkckuCQGj3UcOu2rbTqniftMDboEpAdqW47op9s0uLxCzV9hsxmbpaa9_bmHTiTC9IrI5nQSDR8IY_l7UAAjw6qNZnwV88vPknWRQLDz8nZ5-Go9FuMFW6XcfIaDySYBOZGzu_RaN8eVB1XeQ5Sowxda3Pmgua8R8_Cs-Hgkd83h7Q94MsDVrhHExiaTXSZyEkyTUBpZ2J6Oy61XUBIvMDGo6ex_dtkWL9CBOfUhWksERKlvScj6aDDoOh_-jmSPXBF5vd5pflHABZcnUcebF9_fMuHiwekDSFHeg_7l9QcjRbhJpjTrkGSHZhkfGakl5sBKKOgI-8muhUM0Bw/p.jpeg?size=2048x1536&size_mode=3" />
                </div>
            </Carousel>
            
        );
    }
};

export default ControlledCarousel;