import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
        marginBottom: 20
      },
    },
  }));

const PaginationComponent = (props) => {
      
    const classes = useStyles();
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    
    
    const handleChange = (event, value) => {
      props.onPageChanged(value);
  };
    
    return <div className={classes.root}>
        <Pagination 
        count={pagesCount} 
        shape="rounded"
        color="primary"
        page = {props.currentPage}
        showFirstButton
        showLastButton
        onChange={handleChange}
        />
        </div>

}

export default PaginationComponent;