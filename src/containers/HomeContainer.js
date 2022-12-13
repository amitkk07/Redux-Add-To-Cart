import Home from '../components/Home';
import { connect} from 'react-redux';
import { addtocart,removeToCart } from '../Services/Actions/actions';
const mapStateToProps=state=>({
    data:state.cardItems  
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addtocart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps) (Home)