import './index.css'
const UserProfile = (props) =>{
    const {UserDetails,key} = props;
    const {imageUrl, Name, Role} = UserDetails;
    console.log(key);
    return (
    <li className="user-card-container"> 
        <img src={imageUrl} alt='avatar' className='avatar'/>
       <div className='user-details-container'>
        <h1 className='user-name'>{Name}</h1>
        <p className='user-designation'>{Role}</p>
       </div>
    </li>)
}
export default UserProfile;