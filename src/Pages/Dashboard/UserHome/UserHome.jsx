import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProviders";
const UserHome = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
              <h2 className="text-3xl font-bold text-center mt-8">
               <span> Hi welcome </span>
               {user?.displayName ? user.displayName : "Back"}
            </h2>
        </div>
    );
};

export default UserHome;