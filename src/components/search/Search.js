import React from "react";

function Search() {
    return (
        <div className="row">
            <form>
                <input type="text" name="city" placeholder='Enter city' className="col-8" autoFocus='on'/>
                <input type="submit" value="Search" className="col-3 btn-primary"/>
            </form>
        </div>
    );
}

export {Search};
