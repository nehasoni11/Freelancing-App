import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import v1 from "../../Resources/v1.webp"
import v2 from "../../Resources/v2.webp"

const Image = () => {
  const myStyle1 = {
    backgroundImage:
      v1,
    height: "80vh",
    opacity: "0.8",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const myStyle2 = {
    backgroundImage:
      v2,
    height: "80vh",
    opacity: "0.8",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      {" "}
      <br /> <br /> <br />
      <div class="container">
      <div class="row justify-content-center">
        <div class="col-6">
        <div style={myStyle1}>
        <h1>
          <Container className="text-center">
            <Row>
              <Col
                style={{
                  fontFamily: "algerian",
                  fontWeight: "bold",
                  marginTop: 225,
                  backgroundColor: "skyBlue",
                }}
              >
                {" "}
                Developers Inc API. 68 million professionals on demand Why hire
                people when you can simply integrate our talented cloud
                workforce instead?
                <button style={{ backgroundColor: "#e75480" }}>
                  View Documentation
                </button>
              </Col>
              </Row>
              </Container>
              </h1>
              </div>
   
        <div class="col-6">

        <div style={myStyle2}>
        <h1>
          <Container className="text-center">
            <Row>
              <Col
                style={{
                  fontFamily: "algerian",
                  fontWeight: "bold",
                  marginTop: 225,
                  backgroundColor: "skyBlue",
                }}
              >
                {" "}
                Developers Inc. API. 68 million professionals on demand Why hire
                people when you can simply integrate our talented cloud
                workforce instead?
                <button style={{ backgroundColor: "#e75480" }}>
                  View Documentation
                </button>
              </Col>
              <Col
                style={{
                  fontFamily: "algerian",
                  fontWeight: "bold",
                  marginTop: 225,
                  backgroundColor: "yellow",
                }}
              >
                Developers Inc. Enterprise. Company budget? Get more done for less
                Use our workforce of 68 million to help your business achieve
                more.
                <button style={{ backgroundColor: "#e75480" }}>Contact Us</button>
              </Col>
            </Row>
          </Container>
        </h1>
      </div>
        </div>   </div>   </div></div>
   
    </>
  );
};

export default Image;
