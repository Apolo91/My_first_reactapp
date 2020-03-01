import React from 'react';
import styles from './Users.module.scss'
import PaginationComponent from '../common/Pagination/PaginationComponent';
import { NavLink } from 'react-router-dom';

const Users = (props) => {

   return <>
    <PaginationComponent totalUsersCount={props.totalUsersCount} 
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}/>
                
  
    { 
       props.users.map(u => <div key={u.id} >
          
            <span>
                <div>
                <NavLink to={'/profile/'+ u.id}>
                <img src={u.photos.small != null ? u.photos.small : "https://cs8.pikabu.ru/post_img/2017/01/24/8/1485265069188571085.jpg"} className={styles.userphoto} />
                </NavLink>
                </div>
                <div>
                {
                        u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}> UnFollow</button>
                            : <button onClick={() => { props.follow(u.id) }}> Follow</button>
                }
                </div>
            </span>
            <span>
                <span className={styles.content}>
                <div> {u.name} </div> 
                <div> {u.status} </div>
                </span>
            </span>
        </div>
        )
    }
</>
}

export default Users;