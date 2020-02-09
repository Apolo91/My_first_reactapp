import React from 'react';
import styles from './Users.module.scss'
import * as axios from 'axios';

class Users extends React.Component {

    constructor(props) {
        super(props);
        
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            });

    }
    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id} >
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : "https://cs8.pikabu.ru/post_img/2017/01/24/8/1485265069188571085.jpg"} className={styles.userphoto} />
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => { this.props.unfollow(u.id) }}> UnFollow</button>
                                    : <button onClick={() => { this.props.follow(u.id) }}> Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span className={styles.content}>
                            <div> {u.name} </div> <div>{u.status}</div>
                        </span>
                        <span className={styles.content}>
                            <div>{"u.location.country"}</div><div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>
                )
            }
        </div>
    }
}

export default Users;
