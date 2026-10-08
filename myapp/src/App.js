import './App.css';
import UserProfile from './components/UserProfile';

const UserDetailsList = [
  {
    uniqueNo: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    Name: 'Vilas Pattepu',
    Role: 'Software Developer',
  },
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    Name: 'Premala Pattepu',
    Role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    Name: 'Vinisha Pattepu',
    Role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    Name: 'Vinod Pattepu',
    Role: 'Software Developer',
  },
];

function App() {
  return (
    <div className='list-container'>
      <h1 className='title'>User List</h1>
      <ul>
        {UserDetailsList.map(eachItem => (
          <UserProfile UserDetails={eachItem} key={eachItem.uniqueNo} />
        ))}
      </ul>
      <a className='App-link' href='https://react.dev' target='_blank' rel='noreferrer'>
        Learn React
      </a>
    </div>
  );
}

export default App;
