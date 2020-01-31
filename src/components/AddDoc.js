import React from 'react';
import {Link} from 'react-router-dom';

class AddDoc extends React.Component{

render() {
    return (
      <div >
      <h6 className="text-color"> Welcome to QuEST Global</h6>

      <ul>
  {/* <li className="subText-color" >You have to register here as a new user.</li>
  <li className="subText-color">you will get temprary ID for office use.</li>
  <li className="subText-color">At the end of the day you have to return it.</li>
  <li className="subText-color">Click here to register</li> */}
      
  {/* <Link to={"/add-document/"} ><button className="btn btn-primary subText-color"> Click here to register -></button></Link> */}

</ul>
      {/* <h3 className="subText-color subText-top">, </h3>
      <h3 className="subText-color"></h3>
      <h3 className="subText-color">and you have to return it at end of the day.</h3> */}
      {/* <h3 className="next-button ">Next -></h3> */}     
    </div>
    );
  }

}

export default AddDoc;
