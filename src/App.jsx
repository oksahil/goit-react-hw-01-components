import Profile from './components/profile/Profile';
import user from './json/user.json';
import Statistics from './components/statistics/Statistics';
import data from './json/data.json';
import FriendList from './components/friend/FriendList';
import friends from './json/friends.json';
import TransactionHistory from './components/transaction/TransactionHistory';
import transaction from './json/transactions.json';
import Section from './components/section/Section';
import { Fragment } from 'react';


function App() {
  return (
    <Fragment>
      <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '35px',
      }} 
      >
        <Profile
              username={user.username}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              followers={user.stats.followers}
              views={user.stats.views}
              likes={user.stats.likes}
        />
      
        <FriendList friends = {friends} />
     
      </div> 

      <Section>
        <Statistics
          title = "Upload stats"
          data={data}
        />
      </Section>
      
      <Section>
        <TransactionHistory transactions={transaction} />
      </Section>
    </Fragment>
  );
}

export default App;