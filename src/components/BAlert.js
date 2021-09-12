import { Alert, Badge } from "react-bootstrap";
import { useState } from "react";
function BAlert() {
  const [Clicked, setClicked] = useState(true);
  if (Clicked) {
    return (
      <>
        <Badge bg="primary">Clicked the cross button!!!</Badge>
        <br />
        <Alert
          variant="danger"
          className="container-sm"
          dismissible
          onClose={() => setClicked(false)}
        >
          <Alert.Heading>
            Oh snap! You got an error! <Badge bg="secondary">Danger</Badge>
          </Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
      </>
    );
  }
  return (
    <>
      <Badge bg="primary">Clicked the cross button!!!</Badge>
      <br />
      <Alert
        variant="success"
        closeLabel="Close alert"
        className="container-sm"
        dismissible
        onClose={() => setClicked(true)}
      >
        <Alert.Heading>
          Hey, nice to see you. <Badge bg="secondary">Sucess</Badge>
        </Alert.Heading>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-1">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </Alert>
      <br />
    </>
  );
}
export default BAlert;
