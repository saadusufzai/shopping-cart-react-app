import React from "react";
import { Link } from "@material-ui/core";
import Footer from '../components/Footer'
const Repo = () => {
  return (
  <>  
    <div className='repo'>
      <h1> MUHAMMAD SAAD ASLAM</h1>
      <Link target='blank'  href='https://github.com/saadusufzai/shopping-cart-react-app' >GIT HUB REPOSITORY </Link>
    </div>
    <Footer height={'60'}/>
  </>  
  );
};

export default Repo;
