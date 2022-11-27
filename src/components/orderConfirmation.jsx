import React from 'react'

const OrderConfirmation = ({ nombre, mail, id }) => {
    return (
        <div>
            <h1>{nombre}, gracias por tu compra!</h1>
            <p>Estimado/a {nombre}, dentro de las próximas 24hs nos estaremos contactando contigo a {mail} para coordinar el medio de pago y envío. El número de orden es {id}</p>
        </div>
    )
}

export default OrderConfirmation