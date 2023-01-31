const Card = (props) => {
  return (
    <div className='mx-auto w-full max-w-xl  shadow-xl'>
      This is Card container {props.children} here is the end of card container
    </div>
  )
}
export default Card
