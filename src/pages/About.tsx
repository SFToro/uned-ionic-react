import { IonContent, IonPage } from "@ionic/react";
import Menu from "../components/menu";

function About() {
  return (
    <>
      <Menu />
      <IonPage id="main-content">
        <IonContent className="ion-padding">
          <div>About page with menu. </div>
        </IonContent>
      </IonPage>
    </>
  );
}

export default About;
