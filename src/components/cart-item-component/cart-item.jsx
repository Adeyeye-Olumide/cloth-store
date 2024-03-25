
import './file.css'

function CartItem(props){
    const {item} = props
    const {name, quantity, imageUrl, id} = item


    return (
        <div className="cart-item-container" key={id}>
            <div className='cart-item-info'>
                <img src={imageUrl} alt="" width="80px" height='100px'/>

                <h2>{name}</h2>
            </div>
        
        <span> QTY: {quantity}</span>
    </div>
    )
}

export default CartItem