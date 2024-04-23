import { tutors } from "@/data/tutorlist";
import { Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";

const TutorCards = () => {
  return (
    <CardGroup>
      {tutors.map((tutor) => {
        return (
          <Card body key={tutor.name} outline>
            <CardBody>
              <CardImg src={"/img/" + tutor.img} alt={tutor.img} />
              <CardTitle tag="h3">{tutor.name}</CardTitle>
              <CardSubtitle>{tutor.level}</CardSubtitle>
              <CardText>{tutor.funFact}</CardText>
            </CardBody>
          </Card>
        );
      })}
    </CardGroup>
  );
};

export default TutorCards;
