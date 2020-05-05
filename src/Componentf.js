import React from 'react';
import { UserConsumer } from './Usercontext';
//import Componentc from './Componentc'
//import { UserProvider } from './Usercontext';

class App extends React.Component{
  render(){
    return(
      <UserConsumer>
{
    username=>{
return<div>
    hello {username}
</div>

    }
}
      </UserConsumer>
        
       
       
      
    )
  }
}
export default App;
