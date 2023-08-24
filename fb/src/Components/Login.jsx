import React, { useState } from 'react'
import '../CSS Files/Login.css'

const Login = () => {

  const[register, setRegister]=useState(false);

  function openreg(){
    setRegister(true)
  }

  function closereg(){
    setRegister(false)
  }

  return (
    <div id='body'>
        <div id='contain'>
            <div id='left'>
              <img src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg'/>
              <p>Facebook helps you connect and share with the people in your life.</p>
            </div>

            <div id='right'>
              <div>
                <form>
                  <input type='email' placeholder='Email or phone number'/><br/>
                  <input type='password' placeholder='password'/><br/>
                  <button>Log in</button>
                  <p>Forgot  your password?</p>
                </form>
                <button onClick={openreg}>Create a new account</button>
              </div>
              <p><b>Create a page</b> for a celebrity, brand or business .</p>
            </div>
        </div>

{/* --------------------------------****--------------------------------- */}

        {register ?
        <div id='regbody'>
        <div id='register'>
              <div>
                <div>
                <p>Sign up</p>
                <p>It's quick and easy.</p>
                </div>
                <div>
                <i onClick={closereg} class="fa-solid fa-xmark fa-xl"></i>
                </div>
              </div>
              <div>
                <input style={{marginRight:"15px"}} className='smallinput' type="text" placeholder='name'/>
                <input className='smallinput' type="text" placeholder='last name'/><br/>
                <input className='fullinput' type="email" placeholder='Mobile number or Email'/><br/>
                <input className='fullinput' type="password" placeholder='New password'/><br/>
                <label>date of birth</label><br/>
                <select className='marginright'>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                </select>
                <select className='marginright'>
                  <option>Aug</option>
                  <option>Sept</option>
                  <option>Oct</option>
                </select>
                <select >
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                </select><br/>

                <label>sex</label><br/>
                <div>
                <span className='marginright'>
                  <span>women</span>
                  <input type="radio"/>
                </span>
                <span className='marginright'>
                <span>male</span>
                  <input type="radio"/>
                </span>
                <span>
                <span>custom</span>
                  <input type="radio"/>
                </span>
                </div>
              </div>

              <div>
                <p>People who use our service may have uploaded your contact information to Facebook. <b>Learn more .</b></p>
                <p>By clicking Sign Up, you agree to our <b>Terms</b> , <b>Privacy Policy</b> and <b>Cookie Policy</b> . You may receive SMS notifications from us and you can opt-out at any time.</p>
                <button>Sign up</button>
              </div>
            </div>
        </div> : null}
    </div>
  )
}

export default Login