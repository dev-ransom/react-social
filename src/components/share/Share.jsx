import './share.css'
import { MdOutlinePhotoLibrary, MdLocationPin, MdEmojiEmotions } from "react-icons/md";
import { FaUserTag } from "react-icons/fa";
const Share = () => {
  return (
      <div className='share'>
          <div className="shareWrapper">
              <div className="shareTop">
                  <img src="/assets/person/11.jpeg" alt="" className="shareProfile" />
                  <input placeholder="what's on your mind Ransom?" className='shareInput'/>
              </div>
              <hr className='shareHr'/>
              <div className="shareBottom">
                  <div className="shareOptions">
                      <div className="shareOption">
                          <MdOutlinePhotoLibrary  style={{ color: "#15ea6b" }} className="shareIcon"/>
                          <span className="shareOptionText">Photo/Video</span>
                      </div>
                      <div className="shareOption">
                          <FaUserTag style={{ color: "#28e" }}  className="shareIcon"/>
                          <span className="shareOptionText">Tag </span>
                      </div>
                      <div className="shareOption">
                          <MdLocationPin  style={{ color: "rgb(204, 10, 10)" }} className="shareIcon"/>
                          <span className="shareOptionText">Location</span>
                      </div>
                      <div className="shareOption">
                          <MdEmojiEmotions style={{ color: "#dbed18" }}  className="shareIcon"/>
                          <span className="shareOptionText">Feelings</span>
                      </div>
                  </div>
                  <buttonc className="shareButton">share</buttonc>
              </div>
          </div>
    </div>
  )
}

export default Share