
const Footer = () => {
  const d = new Date();
  return (
    <div  style={{marginTop:'auto'}}  className="p-2 bg-danger text-white text-center">
  <footer className="footer text-center mb-0">
      <div className="footer-content mb-0">
       A Kanishka's Innovative Project   &copy;{d.getFullYear()} Copyrighted by Kanishka Palani
      </div> 

    </footer>
       </div>
  );
};

export default Footer;