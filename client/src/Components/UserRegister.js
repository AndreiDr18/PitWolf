
import UserRegisterForm from "./UserRegister/UserRegisterForm"

function userRegister() {
    return (
        <div className="container RegisterContainer">
            <div className="row logoRowReg text-center">
                <div className="col-4"></div>
                <div className="col-4">
                    <h2>Pitwolf</h2>
                </div>
                <div className="col-4"></div>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <UserRegisterForm/>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    )
}

export default userRegister