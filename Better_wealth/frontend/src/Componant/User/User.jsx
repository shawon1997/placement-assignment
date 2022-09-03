import axios from 'axios';
const User = () => {
  const submit=()=>{
    axios({
      url: "http://localhost:4800/user",
      method: "POST"
    })
  }
  return(
    <>
      <form onSubmit={submit}>
      <textarea></textarea>
      </form>
    </>
  );
};


export default User