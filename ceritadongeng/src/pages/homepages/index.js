import Home from "../../component/home/slider";
import React from 'react';
import NavbarHome from '../../component/home/navbar';
// import FeedbackHome from "../../component/home/feedback";
import logo from '../../icon/garis.png';
import garis from '../../icon/garis.png';
import profil from '../../icon/profile.png';
// import Feedback from '../../img/FeedBack.png';
import CardCerita from "../../component/home/card_cerita";
// import {Table} from 'react-bootstrap';
import slider1 from '../../img/bebek_buruk_rupa_thumbnail.png';
import slider2 from '../../img/kancil_buaya_thumbnail.png';
import slider3 from '../../img/Kancil_dan_harimau_thumbnail.png';
import slider4 from '../../img/kelinci_kura_thumbnail.png';


// import cardImg1 from '../../img/homepage_bangau_kepiting.png'
// import cardImg2 from '../../img/homepage_bebek_buruk_rupa.png'
// import cardImg3 from '../../img/homepage_dua_anak_ayam.png'
// import cardImg4 from '../../img/homepage_bangau_kepiting.png'
// import cardImg5 from '../../img/homepage_kancil_buaya.png'
// import cardImg6 from '../../img/homepage_kancil_harimau.png'
// import cardImg7 from '../../img/homepage_kelinci_kura.png'
// import cardImg8 from '../../img/homepage_singa_tikus.png'
// import cardImg9 from '../../img/homepage_kera_ayam.png'

// import img_feedbacck from '../../img/FeedBack.png'

const PageHome = ()=>{
    return(
        <div className="Container">
            <div className="Home">
                <NavbarHome
                    logo = {logo}
                    garis = {garis}
                    profil = {profil}
                />
                <Home
                    
                    slider1 = {slider1}
                    slider2 = {slider2}
                    slider3 = {slider3}
                    slider4 = {slider4}
                />
                
                <CardCerita
                    title = {"Baru Rilis"}
                    cerita1 = {slider1}
                    cerita2 = {slider2}
                    cerita3 = {slider3}
                />

                <CardCerita
                    title = {"Cerita Terpopuler"}
                    cerita1 = {slider2}
                    cerita2 = {slider3}
                    cerita3 = {slider1}
                />

                <CardCerita
                    title = {"Segera Rilis"}
                    cerita1 = {slider2}
                    cerita2 = {slider1}
                    cerita3 = {slider3}
                />
                {/* <FeedbackHome
                    img_feedback = {Feedback}
                /> */}
            </div>


        </div>
    )
}
export default PageHome;