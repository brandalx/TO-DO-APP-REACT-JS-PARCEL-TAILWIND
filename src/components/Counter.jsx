const Counter = ({ activecount, totalcount }) => {
  return (
    <div className='mx-auto flex h-10 items-center '>
      <div className='mx-auto'>
        <p className='text-center text-gray-400'>
          Made {activecount} out of {totalcount}
        </p>
      </div>
    </div>
  )
}
export default Counter
