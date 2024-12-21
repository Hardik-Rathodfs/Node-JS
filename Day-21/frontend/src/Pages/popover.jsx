import axios from 'axios';
import React,{useState} from 'react'
import { toast, ToastContainer } from 'react-toastify';

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
  
      const handleSubmit = (E) => {
        E.preventDefault()
        axios.post("http://localhost:8080/changepassword", changepass)
          .then((Res) => {
            console.log(Res)
            toast.success("Registration successful!"); // Toast for successful registration
            navigate('/');
          }).catch((err) => {
            console.log(err)
            toast.error("Registration failed!"); // Toast for registration failure
          })
      }

  return (
    <>
    <div className="modal">
    <ToastContainer /> {/* Add ToastContainer to render toasts */}
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <h2 className='cp'>Change Password</h2>
            <form onSubmit={handleSubmit}>
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