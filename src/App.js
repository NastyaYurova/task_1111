import React, {Component} from 'react';
import {users} from "./database/UserDB";
import UserComponents from "./components/user/UserComponents";

class App extends Component {


    render() {



        return (
            <div className= "text">
                <div>
              {
             users.map((user,index) => {
let clsX = index % 2 ? 'even' : 'odd';

return (
    <UserComponents
        item={user}
        cls={clsX}
        key={index}/>);
             })

              }

            </div>
            </div>
        );
    }
}

export default App;