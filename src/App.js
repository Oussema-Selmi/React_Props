import React from 'react'
import Profile from './Profile/Profile'

  const FullName="Oussema Selmi"
  const Bio="Oussema Selmi, 21-year-old web developpement student who enjoys spreading fake news on Facebook, ferret racing and planking. He is friendly, but can also be very lazy and a bit violent."
  const Profession="Web developper"
const handleName =()=>(
  alert (`Welcome , ${FullName}`)
)




function App() {

  return (
    <div className="App">
        <Profile 
        FullName={FullName}
        Bio={Bio}
        Profession={Profession}
        handleName={handleName}
        >
          <img src="https://picsum.photos/200/300" alt="profilephoto" />
        </Profile>
    </div>
  );
}

export default App;
