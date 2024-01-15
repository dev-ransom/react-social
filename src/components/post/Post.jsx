import './post.css'
import { MdMoreVert } from "react-icons/md";
const Post = () => {
  return (
      <div className='post'>
          <div className="postWrapper">
              <div className="postTop">
                  <div className="postTopLeft">
                      <img src="/assets/person/11.jpeg" alt="" className="postProfileImg" />
                      <span className="postUsername">Sunday Ransom</span>
                      <span className="postDate">5 mins ago</span>
                  </div>
                  <div className="postTopRight">
                    < MdMoreVert/>
                  </div>
              </div>
              <div className="postCenter">
                  <span className="postText">Hi guys, it's my first post</span>
                  <img src="/assets/post/1.jpeg" alt="" className="postImg" />
              </div>
              <div className="postBottom"></div>
          </div>
    </div>
  )
}

export default Post