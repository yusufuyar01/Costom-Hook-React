import useInput from "./useInput.js";
function PersonalInfo() {
    // const [firstName, setFirstName] = useState("")
    // const [lastName, setLastName] = useState("")

    const [ firstName, bindFirstName, resetFirstName ] = useInput()
    const [lastName, bindLastName, resetLastName ] = useInput()

    
    const submitForm = (e) => {
        e.preventDefault();
        alert(`Merhaba, ${firstName} ${lastName}!`)
        resetFirstName()
        resetLastName()
    }
  return (
    <div>
      <form onSubmit={submitForm} >
        <label>
          İsim :
          <input type="text" {...bindFirstName} />
        </label>
        <br />
        <label>
          Soyisim :
          <input type="text" {...bindLastName} />
        </label>
        <br />
        <button>Kaydet</button>
      </form>
    </div>
  )
}

export default PersonalInfo
