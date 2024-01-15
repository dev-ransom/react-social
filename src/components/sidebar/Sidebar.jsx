import "./sidebar.css"
import { MdRssFeed, MdChat, MdVideoLibrary, MdGroups2, MdBookmark, MdOutlineEvent} from "react-icons/md";
import { IoBriefcaseOutline } from "react-icons/io5";
import { CiCircleQuestion } from "react-icons/ci";
import { GiGraduateCap } from "react-icons/gi";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MdRssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <MdChat   className="sidebarIcon"/>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <MdVideoLibrary className="sidebarIcon"/>
            <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItem">
            <MdGroups2 className="sidebarIcon"/>
            <span className="sidebarListItemText">Group</span>
          </li>
          <li className="sidebarListItem">
            <MdBookmark className="sidebarIcon"/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <CiCircleQuestion className="sidebarIcon"/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <IoBriefcaseOutline className="sidebarIcon"/>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <MdOutlineEvent className="sidebarIcon"/>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <GiGraduateCap className="sidebarIcon"/>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
      <button className="sidebarButton">Show more</button>
      <hr className="sidebarHr" />
      <ul className="sidebarFriendList">
        <li className="sidebarFriend">
          <img src="/assets/person/12.jpeg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Apst Tolu agboola</span>
        </li>
        <li className="sidebarFriend">
          <img src="/assets/person/12.jpeg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Apst Tolu agboola</span>
        </li>
        <li className="sidebarFriend">
          <img src="/assets/person/12.jpeg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Apst Tolu agboola</span>
        </li>
        <li className="sidebarFriend">
          <img src="/assets/person/12.jpeg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Apst Tolu agboola</span>
        </li>
        <li className="sidebarFriend">
          <img src="/assets/person/12.jpeg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Apst Tolu agboola</span>
        </li>
        <li className="sidebarFriend">
          <img src="/assets/person/12.jpeg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Apst Tolu agboola</span>
        </li>
        <li className="sidebarFriend">
          <img src="/assets/person/12.jpeg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Apst Tolu agboola</span>
        </li>
        <li className="sidebarFriend">
          <img src="/assets/person/12.jpeg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Apst Tolu agboola</span>
        </li>
        <li className="sidebarFriend">
          <img src="/assets/person/12.jpeg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Apst Tolu agboola</span>
        </li>
        <li className="sidebarFriend">
          <img src="/assets/person/12.jpeg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Apst Tolu agboola</span>
        </li>
        <li className="sidebarFriend">
          <img src="/assets/person/12.jpeg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Apst Tolu agboola</span>
        </li>
        <li className="sidebarFriend">
          <img src="/assets/person/12.jpeg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Apst Tolu agboola</span>
        </li>
        <li className="sidebarFriend">
          <img src="/assets/person/12.jpeg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Apst Tolu agboola</span>
        </li>
        <li className="sidebarFriend">
          <img src="/assets/person/12.jpeg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Apst Tolu agboola</span>
        </li>
        <li className="sidebarFriend">
          <img src="/assets/person/12.jpeg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Apst Tolu agboola</span>
        </li>
        <li className="sidebarFriend">
          <img src="/assets/person/12.jpeg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Apst Tolu agboola</span>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Sidebar