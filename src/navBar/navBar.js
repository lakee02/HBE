import React from "react";
import Nature from "./nature.jpg";
function NavBar(){
    return(
        <div>
            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"></img>
            <img src={Nature} alt="img"></img>
        </div>
    );
}

export default NavBar;