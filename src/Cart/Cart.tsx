interface IProps {
    cart: string[]
}

const Cart = ({cart}: IProps) => {
    return (
        <>
            <ul>
                {cart.map(item, idx) => <li key={idx}>{item}</li>}
            </ul>
        </>
    )
}