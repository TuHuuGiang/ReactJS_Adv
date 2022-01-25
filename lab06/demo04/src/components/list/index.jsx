import React from 'react';
import { Product } from '../product';

// export const List = (props) => {
//     const products = props.products;

//     return(
//         <>
//             <div>
//                 {
//                     products.map(p => (
//                         <Product id={p.id} title={p.title} price={p.price} category={p.category} />
//                     ))
//                 }
//             </div>
//         </>
//     );
// }

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3002/product')
            .then(result => result.json())
            .then(product_json => this.setState({ items: product_json }))
    }

    render() {
        return (
            <>
                <h1>List of Product</h1>
                <div>
                    {
                        this.state.items.map(p => (
                            <Product id={p.id} title={p.title} price={p.price} category={p.category} key={p.id} />
                        ))
                    }
                </div>
            </>
        );
    }
}

export default List;