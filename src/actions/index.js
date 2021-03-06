import axios from 'axios';
export const GETCARDS = 'GETCARDS';
export const GETDETAILS = 'GETDETAILS';
export const GETNAMES = 'GETNAMES';
export const ORDERPRODUCT = 'ORDERPRODUCT';
export const GETALLPEDIDOS = 'GETALLPEDIDOS';
export const GETPEDIDOSBYSTATE = 'GETPEDIDOSBYSTATE';
export const GETPEDIDODETAIL = 'GETPEDIDODETAIL';
export const PUTPEDIDO = 'PUTPEDIDO';


// export const GETNAMESQ = 'GETNAMESQ'



export function getProducts () {
    return (dispatch) => {
        axios.get('https://e-commerce12vinotecapp.herokuapp.com/productos/all')
        .then(response => {
            dispatch({ type: GETCARDS, payload: response.data.filter(el => el.id)})
        })
        .catch((err) =>{
            console.log(err)
        })
    }
};

export function getDetail (id) {
    return (dispatch) => {
        axios.get('https://e-commerce12vinotecapp.herokuapp.com/admin/productos/id/' + id)
        .then(response => {
            dispatch({ type: GETDETAILS, payload: response.data})
        })
        .catch((err) =>{
            console.log(err)
        })
    }
};
export function orderProduct ({offset, type, order, name}) {
    return (dispatch) => {
        const datos = `offset=${offset}&${type}=type&${order}=order&${name}=name`
        axios.get('https://e-commerce12vinotecapp.herokuapp.com/admin/productos/order?' + datos )
        .then(response => {
            dispatch({ type: ORDERPRODUCT, payload: response.data})
        })
        .catch((err) =>{
            console.log(err)
        })
    }
};

// export function getNamesQuery(name){
//     return (dispatch) => {
//         axios.get('http://localhost:3001/productos/?name='+ name)
//         .then(response => {
//             dispatch({ type: GETNAMESQ, payload: response.data})
//         })
//         .catch((err) =>{
//             console.log(err)
//         })
//     }
// }
export function getNames(){
    return (dispatch) => {
        axios.get('https://e-commerce12vinotecapp.herokuapp.com/admin/productos/names')
        .then(response => {
            dispatch({ type: GETNAMES, payload: response.data})
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}
//ACTIONS DEL ADMIN

//USUARIOS POST Y PUT y DELETE
export function postUsuarios(usuario ) {
    console.log('llegue hasta action marcos')
    return (dispatch) => {
        axios.post('https://e-commerce12vinotecapp.herokuapp.com/admin/clientesPost', usuario)
    }
}

export function putUsuarios(usuario ) {
    axios.put(`https://e-commerce12vinotecapp.herokuapp.com/admin/users/${usuario.id}`, usuario)
}

export function deleteUsuarios(id ) {
    axios.delete(`https://e-commerce12vinotecapp.herokuapp.com/admin/client/${id}`)
}

//PRODUCTOS POST Y PUT Y DELETE
export function addProduct(product) {
    console.log('llegue hasta action')
    return (dispatch) => {
        axios.post('https://e-commerce12vinotecapp.herokuapp.com/admin/productos', product)
    }
}
export async function editProduct(id, payload) {
    await axios.put('https://e-commerce12vinotecapp.herokuapp.com/admin/productos/' + id, payload)     
}
export async function deleteProduct(id) {
    await axios.delete(`https://e-commerce12vinotecapp.herokuapp.com/admin/producto/${id}`)
}

//PEDIDOS
export function getAllPedidos() {
    return (dispatch) => {
        axios.get('https://e-commerce12vinotecapp.herokuapp.com/admin/pedidos/all')
        .then(response => {
            dispatch({ type: GETALLPEDIDOS, payload: response.data})
        })
        .catch((err) =>{
            console.log(err)
        })
    }
};
export function getPedidosByState(state) {
    return async (dispatch) => {
        try{
           const response = await axios.get("https://e-commerce12vinotecapp.herokuapp.com/admin/pedidos/filter?valor="+state)
           .then (response => {
               dispatch({ type: GETPEDIDOSBYSTATE, payload: response.data})
           }) 

        } catch (err){
            console.log(err)
        }
    }
};
export function getPedidoDetail(id) {
    return (dispatch) => {
        axios.get('https://e-commerce12vinotecapp.herokuapp.com/admin/detallePedido/'+id)
        .then(response => {
            dispatch({ type: GETPEDIDODETAIL, payload: response.data})
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}
export function putPedido(id, payload) {
    return (dispatch) => {
        axios.put(`https://e-commerce12vinotecapp.herokuapp.com/admin/pedidos/id/${id}`, payload)
        .then(response => {
            dispatch({ type: PUTPEDIDO, payload: response.data})
        })
        .catch((err) =>{
            console.log(err)
        })
    }
};
// axios.defaults.baseURL ="http://localhost:3001";