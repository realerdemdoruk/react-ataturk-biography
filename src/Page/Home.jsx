import React from "react";
import HeroSection from "../components/HeroSection";
import Timeline from "../components/Timeline";
import Principles from "../components/Principles";
import GetCard from "../components/GetCard";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  const lifeEvents = [
    {
      id: 1,
      title: "Doğumu ve Çocukluğu",
      description:
        "Mustafa Kemal Atatürk, 1881 yılında Selanik'te doğdu. Zübeyde Hanım ve Ali Rıza Efendi'nin çocuğu olarak dünyaya geldi.",
      imageUrl:
        "https://i.odatv.com/images/2022_07/2022_07_23/odatv_image_65__782ca3dc9cdb4a.jpg",
    },
    {
      id: 2,
      title: "Askeri Eğitim Yılları",
      description:
        "1893'te Selanik Askeri Rüştiyesi'ne başladı. 1899'da İstanbul Harp Okulu'nu, 1905'te Harp Akademisi'ni bitirdi.",
      imageUrl:
        "https://www.campusonline.com/upload/blog/Atatrknaskerieitimi_cxiwimUW/79db1a2ee95246b8a16333fdb007b66d.jpg",
    },
    {
      id: 3,
      title: "Kurtuluş Savaşı",
      description:
        "19 Mayıs 1919'da Samsun'a çıkarak Milli Mücadele'yi başlattı. Türk milletini Kurtuluş Savaşı'nda zafere ulaştırdı.",
      imageUrl:
        "https://www.tarihiolaylar.com/img/tarihiolaylar/tarihi_olaylar_ataturk_kurtulus_savasi-jpg_337112121_1437214128.jpg",
    },
    {
      id: 4,
      title: "Cumhuriyet'in İlanı",
      description:
        "29 Ekim 1923'te Cumhuriyet ilan edildi ve Mustafa Kemal, Türkiye Cumhuriyeti'nin ilk Cumhurbaşkanı seçildi.",
      imageUrl:
        "https://cdnuploads.aa.com.tr/uploads/Contents/2020/10/28/thumbs_b_c_f5a34a36d465087f665f8f73a086c000.jpg",
    },
    {
      id: 5,
      title: "İnkılaplar Dönemi",
      description:
        "Harf Devrimi, Kılık-Kıyafet Devrimi, Kadın Hakları gibi birçok önemli reform gerçekleştirdi.",
      imageUrl:
        "https://cdn.istanbul.edu.tr/FileHandler.ashx?f=Tw2zcNAPQEeOI_tIEcTSTg",
    },
    {
      id: 6,
      title: "Son Yılları",
      description:
        "10 Kasım 1938'de İstanbul Dolmabahçe Sarayı'nda hayata gözlerini yumdu. Türk milleti kendisine Atatürk soyadını verdi.",
      imageUrl:
        "https://www.akademiktarihtr.com/wp-content/uploads/2019/01/asd.jpg",
    },
  ];

  return (
    <>
      <HeroSection />
      <Timeline />
      <Container>
        <h2 className="text-center my-4">Hayatından Kesitler</h2>
        <Row className="g-4">
          {lifeEvents.map((event) => (
            <Col key={event.id} xs={12} sm={6} md={6} lg={4}>
              <GetCard
                title={event.title}
                description={event.description}
                imageUrl={event.imageUrl}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Principles />
    </>
  );
};

export default Home;
