import React,{useState} from 'react'

const popover = () => {
    const [changepass, setchangepass] = useState({
        oldpassword:"",
        newpassword:"",
        confirmpassword:'',
        email: "",
      });

  const [isModalOpen, setModalOpen] = useState(false);


    const toggleModal = () => {
        setModalOpen(!isModalOpen);
      };


    const handleChangee = (e) => {
        const { name, value } = e.target;
        setchangepass({ ...changepass, [name]: value });
      };
  
      const submit=(e)=>{
        e.preventDefault()
        fetch(`http://localhost:8080/changepassword`,{
          method : "POST",
          headers : {
             "Content-Type" : "application/json"
          },
          body : JSON.stringify(changepass)
        })
        .then((Res)=>Res.json())
          .then((Res) => {
              console.log(Res);
            })
            .catch((err) => {
              console.log(err);
            });
  
  
      }

  return (
    <>
    <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <h2 className='cp'>Change Password</h2>
            <form onSubmit={submit}>
            <input type="text" placeholder="Email" onChange={handleChangee} name='email' required className="input-field2" />
            <input type="password" placeholder="Old Password" onChange={handleChangee} name='oldpassword' required className="input-field2" />
            <input type="password" placeholder="New Password" onChange={handleChangee} name='newpassword' required className="input-field2" />
            <input type="password" placeholder="Confrim Password" onChange={handleChangee} name='confirmpassword  ' required className="input-field2" />
            <input type='submit' className="submit-button2" value='submit'/>
            </form>
          </div>
        </div>
    </>
  )
}

export default popover