import { IonContent, IonPage } from "@ionic/react";

function About() {
  return (
    <>
      <IonPage id="main-content">
        <IonContent className="ion-padding">
          <div>About page without menu. </div>
        </IonContent>
      </IonPage>
    </>
  );
}

export default About;
