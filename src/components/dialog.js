import React from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import ListItemText from "@mui/material/ListItemText"
import ListItem from "@mui/material/ListItem"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import CloseIcon from "@mui/icons-material/Close"
import Slide from "@mui/material/Slide"
import cin_structure from "../images/cin_format.png"
import "../stylesheet/index.css"
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
export default function DialogBox(props) {
  return (
    <div>
      <Dialog
        fullScreen
        open={props.open}
        onClose={props.handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={props.handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Decode CIN
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="dialog_container">
          <img className="cin_structure" src={cin_structure} />
          <Divider />
          <div className="dialog_text_box">
            <h1 className="dialog_heading">
              What is Corporate Identification Number (CIN)?
            </h1>
            <p className="text">
              A Corporate Identification Number (CIN) is a 21 digits
              alpha-numeric unique identification number that is assigned by the
              Registrar of Companies (ROC) to the companies registered in India.
              The ROC gives the CIN to the companies while issuing their
              Registration Certificate.
            </p>
            <h1 className="dialog_heading">Breaking down CIN</h1>
            <p className="text">
              The 21-digits CIN represents and provides information about the
              company. The CIN can be broken down into six sections. In the
              above example, the CIN can be broken down as follows:
              <li>Section-1: The first character – L </li>
              <li>Section-2: The next five digits – 01631</li>
              <li> Section-3: The next two letters – KA</li>{" "}
              <li>Section-4: The next four digits – 2010</li>
              <li> Section-5: The next three characters – PTC </li>
              <li>Section-6: The last six digits – 096843</li>
              <br></br>
              Each section provides the following information:
              <li>
                Section-1: Consists of the first character of CIN that reveals
                whether a company is “Listed” or “Unlisted” on the Indian stock
                market. In other words, the first character implies the Stock
                Market listing status. In case a company is listed, the CIN
                would start with the letter ‘L’ and in case a company isn’t
                listed it would start with the letter ‘U’.
              </li>
              <li>
                {" "}
                Section-2: Consists of the next set of five numeric digits that
                categorizes the economic activity of a company or to which
                industry the company belongs to. This classification is based on
                the nature of the economic activities which would be carried out
                by such an establishment. The Ministry of Corporate Affairs
                (MCA) has allotted a number to every category or industry.
              </li>
              <li>
                Section-3: Consists of the next two letters that denote the
                Indian state where the company is registered. For instance, KA
                is for Karnataka, MH is for Maharashtra, DL is for Delhi, etc.
                It works in a similar fashion as the car registration number.
              </li>
              <li>
                {" "}
                Section-4: Consists of the next set of four numeric digits that
                signifies the year of incorporation of a company.
              </li>{" "}
              Section-5: Consists of the following three letters that denote the
              company classification. These three letters help to identify
              whether a company is a private limited company or a public limited
              company. If the CIN number here is FTC, it would mean that such a
              company is a subsidiary of any foreign company or if it’s GOI, it
              would imply that such company is owned by the Indian Government.
              <li>
                Section-6: Consists of the remaining six numeric digits that
                denote the registration number provided by the respective
                Registrar of Companies (ROC).
              </li>
            </p>
            <Divider />
            <p className="text">
              <b>NOTE: </b>You can get CIN number for any Indian company from
              Ministry of Corporate Affairs's (MCA) official website or by click{" "}
              <a
                target="_blank"
                href="http://www.mca.gov.in/mcafoportal/viewCompanyMasterData.do"
              >
                here
              </a>
            </p>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
