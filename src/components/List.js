import React from 'react'
import { ListItems } from '../styles/Main';

const List = (props) => {
 const {data} = props;
  return (
        data.map((dat) =>{
            return (
                <ListItems>
                    {dat}
                </ListItems>
            )
        })
  )
}

export default List