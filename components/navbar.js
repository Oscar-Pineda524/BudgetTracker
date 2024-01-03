import {ImStatsBars} from "react-icons/im"

function Navbar(){
    return <div>
        <header className="container max-w-7xl px-2 py-6 mx-auto">
        <div className="flex items-center justify-between">
        {/* user info for display in header*/}
        <div className="flex items-center gap-2">
            {/*img*/}
            <div className=" h-[40px] w-[40px] rounded-full overflow-hidden">
            <img 
            className="object-cover w-full h-full "
            src="https://i.kym-cdn.com/entries/icons/original/000/028/261/Matt_CPU.jpg" 
            alt="Mii profile picture"
            />
            </div>
    
            {/*user name*/}
            <small className="text-white">Hi, Oscar</small>
        </div>
    
        {/*right side of the nav bar*/}
        <nav className="flex items-center gap-2">
            <div><ImStatsBars className="text-white text-2xl"/></div>
            <div>
            <button className="btn btn-danger">
                sign out
            </button>
            </div>
        </nav>
        </div>
        </header>
        </div>   

}

export default Navbar