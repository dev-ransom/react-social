import './topbar.css'
import { IoIosChatboxes, IoIosNotifications, IoIosSearch, IoMdPerson} from 'react-icons/io'
const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className='Logo'>RamseySocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <IoIosSearch className="searchICon"/>
          <input
            placeholder=" Search for  friend, post or video "
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <article className="topbarLinks">
          <span className="topbarlink">Homepage</span>
          <span className="topbarlink">Timeline</span>
        </article>
        <div className="topbarIcons">
          <article className="topbarIconItem">
            <IoMdPerson />
            <span className="topbarIconBadge">1</span>
          </article>
          <article className="topbarIconItem">
            <IoIosChatboxes />
            <span className="topbarIconBadge">2</span>
          </article>
          <article className="topbarIconItem">
            <IoIosNotifications />
            <span className="topbarIconBadge">3</span>
          </article>
        </div>
          <img src="/assets/person/11.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  )
}

export default Topbar
