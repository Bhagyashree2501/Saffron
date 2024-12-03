// import React from "react";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// import axios from "axios";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// // const Reservation = () => {
// //   const [firstName, setFirstName] = useState("");
// //   const [lastName, setLastName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [date, setDate] = useState("");
// //   const [time, setTime] = useState("");
// //   const [phone, setPhone] = useState(0);
// //   const navigate = useNavigate();

//   // const handleReservation = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const { data } = await axios.post(
//   //       "http://localhost:4000/reservation/send",
//   //       { firstName, lastName, email, phone, date, time },
//   //       {
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //         },
//   //         withCredentials: true,
//   //       }
//   //     );
//   //     toast.success(data.message);
//   //     setFirstName("");
//   //     setLastName("");
//   //     setPhone(0);
//   //     setEmail("");
//   //     setTime("");
//   //     setDate("");
//   //     navigate("/success");
//   //   } catch (error) {
//   //     toast.error(error.response.data.message);
//   //   }
//   // };


//   const PostRequestExample = () => {   const [responseData, setResponseData] = useState(null);   const sendPostRequest = async () => {     try {       const response = await fetch("http://localhost:9000/aliens", {         method: "POST",         headers: {           "Content-Type": "application/json",         },        body: JSON.stringify({           name: "Tushar",           tech: "Html",           sub: "true",         }),      });       if (!response.ok) {       
//       throw new Error("Failed to send request"); } const data = await response.json(); 
//   setResponseData(data); } catch (error) { console.error("Error:", error); } };
  

//         return (

//           <section className="reservation" id="reservation">
//             <div className="container">
//               <div className="banner">
//                 <img src="/reservation.png" alt="res" />
//               </div>
//               <div className="banner">
//                 <div className="reservation_form_box">
//                   <h1>MAKE A RESERVATION</h1>
//                   <p>For Further Questions, Please Call</p>
//                   <form>
//                     <div>
//                       <input
//                         type="text"
//                         placeholder="First Name"
//                         value={firstName}
//                         onChange={(e) => setFirstName(e.target.value)}
//                       />
//                       <input
//                         type="text"
//                         placeholder="Last Name"
//                         value={lastName}
//                         onChange={(e) => setLastName(e.target.value)}
//                       />
//                     </div>
//                     <div>
//                       <input
//                         type="date"
//                         placeholder="Date"
//                         value={date}
//                         onChange={(e) => setDate(e.target.value)}
//                       />
//                       <input
//                         type="time"
//                         placeholder="Time"
//                         value={time}
//                         onChange={(e) => setTime(e.target.value)}
//                       />
//                     </div>
//                     <div>
//                       <input
//                         type="email"
//                         placeholder="Email"
//                         className="email_tag"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                       />
//                       <input
//                         type="number"
//                         placeholder="Phone"
//                         value={phone}
//                         onChange={(e) => setPhone(e.target.value)}
//                       />
//                     </div>
//                     <button type="submit" onClick={sendPostRequest}>
//                       RESERVE NOW{" "}
//                       <span>
//                         <HiOutlineArrowNarrowRight />
//                       </span>
//                     </button>
//                     <button type="test" onClick={sendPostRequest}>
//                       test
//                     </button>

//                   </form>
//                 </div>
//               </div>
//             </div>
//           </section>
//         );
//       };
    

//       export default Reservation;








import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Reservation = () => {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  
  

  const [sub, setSub] = useState("true");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:9000/aliens", {
        Fname,
        Lname,
        date,
        time,
        number,
        email
      });
      toast.success("Reservation Successful!");
      console.log("Response Data:", data); // Log the response data
    } catch (error) {
      console.error("Error:", error);
      toast.error("Post request failed!");
      console.error("Error:", error);

      if (error.response) {
        // Server responded with a status other than 200 range
        toast.error(`Error: ${error.response.data.message || "Something went wrong!"}`);
        console.log("Response Error Data:", error.response.data);
        console.log("Response Status:", error.response.status);
      } else if (error.request) {
        // Request was made, but no response received
        toast.error("No response received from the server.");
        console.log("Request Data:", error.request);
      } else {
        // Something happened in setting up the request
        toast.error(`Request error: ${error.message}`);
      }
    }
  };

  return (
    <div>
      <section className="reservation" id="reservation">
        <div className="container">
          <div className="banner">
            <img src="/reservation.png" alt="res" />
          </div>
          <div className="banner">
            <div className="reservation_form_box">
              <h1>Make a Reservation</h1>
              <p>For Further Questions, Please Call</p>
              
              <form onSubmit={handleSubmit}>
                <div>
                <input type="text" placeholder="First Name" value={Fname} onChange={(e) =>
                  setFname(e.target.value)}/>
                </div>
                <div>
                <input type="text" placeholder="Last Name" value={Lname} onChange={(e) =>
                  setLname(e.target.value)}/>
                </div>
                <div>
                <input type="date" placeholder="Date" value={date} onChange={(e) =>
                  setDate(e.target.value)}/>
                </div> 
                <div>
                <input type="time" placeholder="time" value={time} onChange={(e) =>
                  setTime(e.target.value)}/>
                </div>

                <div>
                <input type="number" placeholder="PhoneNumber" value={number} onChange={(e) =>
                  setNumber(e.target.value)}/>
                </div>

                <div>
                <input type="email" placeholder="Email" className="email_tag" value={email} 
                    onChange={(e) =>setEmail(e.target.value)}/>
                </div>
            
            
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservation;