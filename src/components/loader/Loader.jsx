// import { CircularProgress } from "@material-ui/core";
import { CircularProgress } from "@mui/material"
import "./loader.css"


function Loader({ cName = "loading", size = "25px" }) {
    return (
        <span className={cName}>
            <CircularProgress color="inherit" size={size} />
        </span>
    )
}

export default Loader
