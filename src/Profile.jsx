import React, { useEffect,useState} from 'react'
import axios from 'axios'// axios is more simple than  the fetch operation it is easy to do curd operations 
function Profile() {
    const [profile,setProfile]=useState(null)

    const[followers,setFollowers]=useState([])

    const[unfollowed,setUnfollowed]=useState(0);



    useEffect(()=>{
        axios.get('http://localhost:3000/profile')
        .then(data=>setProfile(data.data))
        .catch(err=>console.log(err))


        axios.get('http://localhost:3000/followers')
        .then(data=>setFollowers(data.data))
        .catch(err=>console.log(err))
    },[unfollowed])

    function HandleonChange(e){
        setProfile(pre=>({
          ...pre,
          [e.target.name]:e.target.value
        }))

    }

    const handleUpdate=()=>{
      axios.put('http://localhost:3000/profile',profile)
      .then(console.log("updated"))
      .catch(err=>console.log(err))
    }

    const handleunfollow=(id)=>{
      axios.delete(`http://localhost:3000/followers/${id}`)
      .then(alert("unfollowed"))
      .then(setUnfollowed(!unfollowed))
      .catch(err=>console.log(err))
    }






  return (
    <div className="m-5">
        {profile ?(
            <div >
                <img src={profile.profile_pic} className="profile rounded-circle"alt="profile pic" />
                <h5>{profile.username}</h5>

                <input type="text" className='form-control my-4'
                  value={profile.username}
                  name="username" onChange={HandleonChange}/>

                 <input type="text" className='form-control'
                 value={profile.profile_pic}
                  name='profile_pic' onChange={HandleonChange}/> 

                  <button className='btn btn-primary my-4' onClick={handleUpdate}>
                    update
                  </button>



            </div>
        ):(

            <div>Loading....</div>    
        )}


        {followers.length > 0 ?(
          followers.map(follower=>(
            <div key={follower.id} className='d-flex my-2'>
              {follower.username}
              <button onClick={()=>{handleunfollow(follower.id)}}className='btn btn-primary ms-auto'>Unfollow</button>
              </div>
          ))

        ):(
          <div>loading followers</div>
        )}
    </div>
  )
}

export default Profile




// import React, { useEffect,useState} from 'react'
// import axios from 'axios'// axios is more simple than  the fetch operation it is easy to do curd operations 
// function Profile() {
//     const [profile,setProfile]=useState(null)
//     useEffect(()=>{
//         axios.get('http://localhost:3000/profile')
//         .then(data=>setProfile(data.data))
//     },[])

//     function HandleonChange(e){
//         setProfile(pre=>{

//         })

//     }

//   return (
//     <div className="m-5">
//         {profile ?(
//             <div >
//                 <img src={profile.profile_pic} className="profile rounded-circle"alt="profile pic" />
//                 <h5>{profile.username}</h5>

            



//             </div>
//         ):(

//             <div>Loading....</div>    
//         )}
//     </div>
//   )
// }

// export default Profile