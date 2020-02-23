import React from 'react';
import styles from './Users.module.scss'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const PaginationComponent = (props) => {
   
      
    const classes = useStyles();

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={classes.root}>

        <Pagination 
        defaultPage={props.currentPage} 
        count={pagesCount} 
        shape="rounded"
        color="primary"
        onChangePage={() => {props.onPageChanged()}}
        />

        {
        pages.map(p => {
        return <span className={props.currentPage === p && styles.selectedPage} 
        onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
        })}
    
    </div>

}

export default PaginationComponent;