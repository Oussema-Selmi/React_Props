import React from 'react'
import PropTypes from "prop-types";

const x={color:"red",
backgroundColor:"black"}
function Profile (props){

    return(
        <div onLoad={props.handleName}>
             
            <h2 style={x}>{props.FullName} , {props.Profession}</h2>
            <p>{props.Bio}</p>       
            {props.children}  
        </div>
    )
}

Profile.defaultProps = {
    FullName:"Guest",
    Bio :"This user has no bio",
    Profession:"Jobless",
  };

  Profile.propTypes = {
      FullName: PropTypes.string,
      Bio: PropTypes.string,
      Profession: PropTypes,
    }



export default Profile