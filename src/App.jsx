import clsx from "clsx";
import './App.css';
import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./transactions.json";

const App = () => (
  <div className={clsx('app-container', { 'has-friends': friends.length > 0 })}>
    <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
    />
    <div> 
      <FriendList friends={friends} />
    </div>
    <div> 
      <TransactionHistory items={transactions} />
    </div>
  </div>
);

export default App;