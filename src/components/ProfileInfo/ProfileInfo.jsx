import ava from "../../img/cat.png"

function ProfileInfo() {
    return (
        <div className="me">
            <img src={ava} alt="" />
            <p>John Dow</p>
        </div>
    )
}

export default ProfileInfo;