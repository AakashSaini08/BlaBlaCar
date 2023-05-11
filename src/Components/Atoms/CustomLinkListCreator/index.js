import React from 'react'
import { Link} from 'react-router-dom'
import "./styles.css"
import { Images } from '../../../Shared/Images'
import { useDispatch } from 'react-redux'
import { logout} from '../../../Redux/Actions'
export default function CustomLinkListCreator({ profileViewLink = false, pic = false, route, linkText, setDropDownListShow = () => { }, setDropDownIconPosition = () => { }, handleSelect = () => { }, profilePic }) {
    const dispatch = useDispatch()


    const handleClick = () => {
        
        handleSelect(linkText)
        if (linkText === "Logout") {
            dispatch(logout.logout())
        }
    }


    return (
        <>
            <ul className={!profileViewLink ? `links` : `profilelinks`} onClick={() => { handleClick() }} >
                <li className={!profileViewLink ? `linksList` : `profilelinksList`} onClick={() => {
                    setDropDownListShow(false)
                    setDropDownIconPosition("dropDownIconDown")
                }}>
                    <Link className={!profileViewLink ? `linkTo` : `profilelinkTo`} to={route}>
                        <span className={!profileViewLink ? `linkText` : `profilelinkText`}>
                            {linkText}
                        </span>
                        {pic && <div className="profilePicDiv">
                            {profilePic ? <img className='profilePic' src={profilePic} alt=""></img> : <img className='profilePic' src={Images.profile} alt=""></img>}
                        </div>}
                        <span className="linkIcon">
                            <img src={Images.rightArrow} alt=""></img>
                        </span>
                    </Link>

                </li>
            </ul>
        </>
    )
}
