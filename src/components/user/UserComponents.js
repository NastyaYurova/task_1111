import React, {Component} from 'react';
import "./User.css"

class UserComponents extends Component {
    render() {
        // let {item} = this.props;
        // console.log(item);
        let{item,cls} = this.props;
        return (
            <div className={cls}>{item.name} - {item.age} - {item.status.toString()}</div>
        );
    }
}

export default UserComponents;