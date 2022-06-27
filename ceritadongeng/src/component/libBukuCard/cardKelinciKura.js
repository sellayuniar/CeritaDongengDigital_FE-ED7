import { Carousel, Card, Button } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import "./index.css";
import {collection, onSnapshot, query, where, orderBy } from "firebase/firestore";
import {useEffect,useState} from "react";
import db from '../../Firestore';
// import {Link} from "react-router-dom";

const CardKelinciKura = () => {
    const [cardKelinciKura, setCardKelinciKura] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "thumb_lib_dongeng"), where("cerita", "==", "Kelinci dan Kura-Kura"), orderBy("index"));
        onSnapshot(q, (snapshot) => {
          setCardKelinciKura(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        });
      }, []);


  return (
    <div className="lib-buku-card mx-2">
      <Card className="no-outline">
        <div className="card-img d-flex">
          <Carousel className="carousel-size">
            {cardKelinciKura.map((thumb, idx) => {
              return (
                <Carousel.Item key={idx}>
                  <img
                    className="d-block"
                    src={thumb.img}
                    width="100%"
                    alt=""
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <Card.Body className="d-flex">
          <Card.Title>
            Kelinci dan Kura-Kura
            <Button>
              <FaHeart size="1.5em" />
            </Button>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardKelinciKura
