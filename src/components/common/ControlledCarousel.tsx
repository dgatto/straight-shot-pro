import "react-responsive-carousel/lib/styles/carousel.min.css";

import React from "react";
import { Carousel } from "react-responsive-carousel";

class ControlledCarousel extends React.Component {
    render() {
        return (
            <Carousel
                showThumbs={false}
                showStatus={false}
                interval={4000}
                transitionTime={700}
                infiniteLoop={true}
                autoPlay={false}>
                <div>
                    <img src="https://previews.dropbox.com/p/thumb/AAfxlla01E3cQvu8fdVfk4WQuU2jL-rD_f117iy5rexskWies0eb5T-fguMLTpj0uQqv5rePVKBcYqZ5Lom12EenYjZkBsmzkVDynOWYHm-a1NkOR75sL5U6xxsKFEPhx-DZ4m9-HAR8no-Lrp5co1siO3ExSdD10KarTecSB0gIlpLyvRncjFA8eMbr7I1C4uArxUUvn4NnWiHoi7LQ97u8cA8ibY0i3O0neLnZDarWHcDpMJfdy3JjX2ADTCVH74XNaaql6a6IweAYLkDKJFATXZZtndZGi8drRHOcNbtNv4ANdBeVgYTsKOJlmyghuicgEqyDz0EEtC4acCbLz3v8/p.jpeg?fv_content=true&size_mode=5" />
                </div>
                <div>
                    <img src="https://previews.dropbox.com/p/thumb/AAcfwVyLl2qGwMna31Jpe7iSADY66AClHwks4FwvGY0gkCF5BWZMjeYqyOuU8ZTxuRrxDrBiOClt5WI91KPnHDm8JdbcUPrk135icEkFr9tTHtHZR7yEIOAw6MDGm_kgX5RF9fShLaIAsSpyGKAVXn6ERNEbXIUupB-Cs595jpxEoLvJrHYZrdxNvAsELqY9HsJ_Dd71sRlmmrkyLuVYnYbqREdVpOjENDqoiX1Q2CffE4Mc6gCJ7HfQIRtq037dz8PwDaeO8nnv0bSzdacOHejqzILLq56XBQcmTFZimcRh-r3AWlPlneurp-Nw3rmKco3VdR1yqaJryfxiqaiw77oC/p.jpeg?fv_content=true&size_mode=5" />
                </div>
            </Carousel>

        );
    }
};

export default ControlledCarousel;