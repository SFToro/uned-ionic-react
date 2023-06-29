import { IonContent, IonPage } from "@ionic/react";
import Nav from "../components/nav";

function About() {
  return (
    <>
      <IonPage id="main-content">
        <Nav />
        <IonContent className="ion-padding">
          <div>About page without menu. </div>
        </IonContent>
      </IonPage>
    </>
  );
}

export default About;
