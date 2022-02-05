import './burgerMenu.css'  

 
export const BurgerMenu = (props)=>{
    function myFunction(x) {
        x.classList.toggle("change");
    }
    return(
        <div className="containerMenu" onClick={myFunction}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    )
}