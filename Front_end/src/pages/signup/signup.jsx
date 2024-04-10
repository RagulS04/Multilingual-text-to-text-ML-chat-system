import GenderCheckBox from './GenderCheckBox';
import { Link,useNavigate} from 'react-router-dom';
import useSignup from '../../hooks/useSignup';
import toast from 'react-hot-toast';
import { useAuthContext } from '../../context/AuthContext';

const Signup = () => {

  const navigate = useNavigate();

  const {loading,signup} = useSignup();
  const {inputs,setInputs} = useAuthContext();

  const handleGender = (gender) => {
    setInputs({...inputs,gender})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = checkError(inputs);

    if(!res) return;
    
    await signup(inputs);

    navigate('/otp_verify')

    //console.log(inputs)
  }

  return (
    <div className='flex flex-col justify-center items-center min-w-96 mx-auto bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
        <h1 className='p-2 text-xl font-mono font-extrabold'>Signup</h1>

        <form onSubmit={handleSubmit}>
            <div className='flex flex-col'>
                <label className='mb-1  font-extrabold'>Fullname</label>
                <input className='w-full rounded-lg py-1 mx-1 px-4 mb-3 input input-primary' 
                  placeholder='Enter username'
                  value={inputs.fullname}
                  onChange={(e)=>{setInputs({...inputs, fullname:e.target.value})}}
                ></input>

                <label className='mb-1  font-extrabold'>Mobile</label>
                <input type="tel" className='w-full rounded-lg py-1 mx-1 px-4 mb-3 input input-primary' placeholder='Enter mobile'
                  value={inputs.mobile}
                  onChange={(e)=>{setInputs({...inputs, mobile:e.target.value})}}
                ></input>

                <label className='mb-1  font-extrabold'>Email</label>
                <input type='email' className='w-full rounded-lg py-1 mx-1 px-4 mb-3 input input-primary' placeholder='Enter email'
                  value={inputs.email}
                  onChange={(e)=>{setInputs({...inputs, email:e.target.value})}}></input>

                <GenderCheckBox handleGender={handleGender} selectedGender={inputs.gender} />
                
            </div>

            <Link to='/login'>Already have an account ?</Link>

            <div>
                <button className='bg-white text-black px-3 py-2 m-3 w-full rounded-full bordered hover:bg-black hover:text-white font-extrabold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...' disabled={loading}>{loading ? <span className="loading loading-spinner loading-md"></span> : "Sign up" }</button>
            </div>
          </form>
    </div>
  )
}

export default Signup;


function checkError ({fullname,mobile,gender,email}){

  if(!fullname || !mobile|| !gender || !email){
      toast.error("please fill all the fields")
      return false;
  }

  return true;
}