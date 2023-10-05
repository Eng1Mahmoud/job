
const Model = (props) => {
  
  return (
    <div className={`fixed modal-body flex-col bg-black bg-opacity-50 flex items-center justify-center top-0 left-0 right-0 bottom-0`}>
  {
    props.children
  }
    </div>
  )
}

export default Model
