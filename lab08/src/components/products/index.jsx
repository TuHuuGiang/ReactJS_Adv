import React from 'react'
import { ref, child, get } from 'firebase/database';
import { db } from '../../utils/firebase-connect';
import { async } from '@firebase/util';



export default class Products extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products:[]
    }
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    const dbRef = ref(db);
    let products = [];
    get(child(dbRef, 'products'))
      .then(data => {
        if(data.exists()) {
          let datas = data.val();
          this.setState({ products: datas });
        }
        else
          console.log('No data');
      })
      .catch(error => {
        console.error(error);
      })
  
    return products;
  }
  
  render() {
    return (
      <div>
        <div>Products</div>
        {this.state.products.map(p => <div>{p.name} - {p.price}</div>)}
      </div>
    )
  }
}