import './index.css'

const CongratsCard = (props) => {
    const { imageurl1, imageurl2 } = props;
    return (
    <div className="bg-container">
        <h1 className="head">Congratulations</h1>
    <div className="main-container">
        <img className="img" src={imageurl1} />
      <h1 className="name" > Shasi B </h1>
      <p className="desc">Vishnu Institute of Computer Education and Technology, Bhimavaram </p>
        <img className="img1" src={imageurl2} /> 
     </div>
    </div>
    )
  }

  export default CongratsCard
  
