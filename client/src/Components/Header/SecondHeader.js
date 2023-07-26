import { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const SecondHeader = () => {
  const [showFreelancers, setShowFreelancers] = useState(false);
  const [showIdea, setShowIdea] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showResources, setShowResources] = useState(false);

  const showDropdownFreelancers = (e) => {
    setShowFreelancers(!showFreelancers);
  };
  const hideDropdownFreelancers = (e) => {
    setShowFreelancers(false);
  };

  const showDropdownIdea = (e) => {
    setShowIdea(!showIdea);
  };
  const hideDropdownIdea = (e) => {
    setShowIdea(false);
  };

  const showDropdownAbout = (e) => {
    setShowAbout(!showAbout);
  };
  const hideDropdownAbout = (e) => {
    setShowAbout(false);
  };

  const showDropdownResources = (e) => {
    setShowResources(!showResources);
  };
  const hideDropdownResources = (e) => {
    setShowResources(false);
  };
  return (
    <>
      <div style={{ fontWeight: "bolder" }} className="p-3 bg-dark text-light">

        <Navbar
          class="navbar navbar-expand-lg navbar-light bg-dark"
       style={{ color: "white", height: 15}} 
          bg="transparent"
          variant="dark"
          expand="lg"
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          <Navbar.Collapse
            id="basic-navbar-nav"
          >
            <Nav.Link href="https://naukri.com">Find Jobs</Nav.Link>&nbsp;&nbsp;  
            &nbsp;&nbsp; &nbsp;
            <NavDropdown
              title="Hire Freelancers"
              id="collasible-nav-dropdown"
              show={showFreelancers}
              onMouseEnter={showDropdownFreelancers}
              onMouseLeave={hideDropdownFreelancers}
            >
              {" "}
              <NavDropdown.Item target="_blank" href="https://www.freelancer.com/hire/adobe-photoshop">By Skill</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item target="_blank" href="https://www.freelancer.com/freelancers/united-states">By Location</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item target="_blank" href="https://www.freelancer.com/hire">Skills Categories</NavDropdown.Item>
            </NavDropdown>
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            <NavDropdown
              title="Get Ideas"
              id="collasible-nav-dropdown"
              show={showIdea}
              onMouseEnter={showDropdownIdea}
              onMouseLeave={hideDropdownIdea}
            >
              {" "}
              <NavDropdown.Item href="/discover/website-design">Get Web Design Ideas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item target="_blank" href="/discover/website-design">Get Mobile App Ideas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item target="_blank" href="/discover/website-design">
                Get Graphic Design Ideas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item target="_blank" href="/discover/website-design">
                Get Logo Design Ideas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item target="_blank" href="/discover/website-design">
                Get 3D Modelling Ideas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item target="_blank" href="/discover/website-design">
                Get Illustration Ideas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item target="_blank" href="/discover/website-design">Get Branding Ideas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item target="_blank" href="/discover/website-design">
                Get Product Design Ideas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item target="_blank" href="/discover/website-design">
                Get Package Design Ideas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item target="_blank" href="/discover/website-design">Get WordPress Ideas</NavDropdown.Item>
            </NavDropdown>{" "}
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
            <NavDropdown
              title="About"
              id="collasible-nav-dropdown"
              show={showAbout}
              onMouseEnter={showDropdownAbout}
              onMouseLeave={hideDropdownAbout}
            >
              {" "}
              <NavDropdown.Item href="https://www.freelancer.com/enterprise">Enterprise</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.freelancer.com/membership/?ngsw-bypass=&w=f">Membership</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.freelancer.com/preferred-freelancer-program">
                Preferred Freelancer Program
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.freelancer.com/verified">Get Verified</NavDropdown.Item>
            </NavDropdown>{" "}
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
            <NavDropdown
              title="Resources"
              id="collasible-nav-dropdown"
              show={showResources}
              onMouseEnter={showDropdownResources}
              onMouseLeave={hideDropdownResources}
            >
              {" "}
              <NavDropdown.Item target="_blank" href="https://www.adobe.com/in/products/photoshop.html">
                What is Adobe Photoshop
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item target="_blank" href="https://developer.android.com/">
                What is Android App Development
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item target="_blank" href="https://byjus.com/english/writing-an-article-tips-and-techniques/">
                What is Article Writing
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item target="_blank" href="https://www.naukri.com/data-entry-jobs-in-bangalore">What is Data Entry</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item target="_blank" href="https://www.andacademy.com/lp/graphic-design-pg-diploma/?utm_source=google+ads&utm_medium=src+graphic+core-exact+desktop+geo+bangalore&utm_campaign=best+course&utm_campaignid=18403083568&utm_adgroupid=138483316221&utm_creativeid=624226375329&utm_matchtype=p&utm_device=c&utm_network=s&utm_keyword=graphic%20design%20course&utm_placement=&gad=1&gclid=Cj0KCQjwn_OlBhDhARIsAG2y6zMM7zhnvN99cUySPrNLLqfDEx3Rbldeu_DiDHYFMdo5uvZwhc3Nx-waAlVLEALw_wcB">
                What is Graphic Design
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item target="_blank" href="https://www.w3schools.com/html/">What is HTML</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item target="_blank" href="https://blog.hubspot.com/marketing/internet-marketing">
                What is Internet Marketing
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item target="_blank" href="https://developer.apple.com/">
                What is iPhone App Development
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item target="_blank" href="https://www.javascript.com/">What is Javascript</NavDropdown.Item>
            </NavDropdown>{" "}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default SecondHeader;
