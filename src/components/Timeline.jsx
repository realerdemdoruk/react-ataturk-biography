import React from "react";
import { Container } from "react-bootstrap";

const Timeline = () => {
  const timelineEvents = [
    {
      year: "1881",
      title: "Doğumu",
      description: "Mustafa Kemal, Selanik'te dünyaya gelir.",
    },
    {
      year: "1893-1905",
      title: "Eğitim Yılları",
      description:
        "Askeri eğitimini tamamlar ve Kurmay Yüzbaşı olarak mezun olur.",
    },
    {
      year: "1911-1915",
      title: "Askeri Başarılar",
      description:
        "Trablusgarp ve Çanakkale cephelerinde önemli başarılar kazanır.",
    },
    {
      year: "19 Mayıs 1919",
      title: "Millî Mücadele",
      description: "Samsun'a çıkarak Kurtuluş Savaşı'nı başlatır.",
    },
    {
      year: "1919-1920",
      title: "Kongreler Dönemi",
      description:
        "Erzurum ve Sivas Kongreleri ile milli birliği sağlar, TBMM'yi açar.",
    },
    {
      year: "30 Ağustos 1922",
      title: "Büyük Zafer",
      description: "Başkomutan olarak Büyük Taarruz'u zaferle sonuçlandırır.",
    },
    {
      year: "29 Ekim 1923",
      title: "Cumhuriyet",
      description: "Türkiye Cumhuriyeti'ni kurar ve ilk Cumhurbaşkanı olur.",
    },
    {
      year: "1923-1938",
      title: "Devrimler Dönemi",
      description:
        "Eğitim, hukuk, sosyal ve kültürel alanlarda modern reformlar gerçekleştirir.",
    },
    {
      year: "10 Kasım 1938",
      title: "Vefatı",
      description: "Gazi Mustafa Kemal Atatürk hayata gözlerini yumar.",
    },
  ];

  return (
    <div className="timeline-container">
      <Container>
        <div className="timeline-header">
          <h2>Kronolojik Yaşam Öyküsü</h2>
          <p>Mustafa Kemal Atatürk (1881-1938)</p>
        </div>
        <div className="timeline-events">
          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-event">
              <span className="timeline-year">{event.year}</span>
              <h3 className="timeline-title">{event.title}</h3>
              <p className="timeline-description">{event.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Timeline;
