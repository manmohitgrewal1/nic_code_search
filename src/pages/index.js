import React, { useState } from "react"
import "../stylesheet/index.css"
import Header from "../components/header"
import SearchIcon from "@mui/icons-material/Search"
import InputBase from "@mui/material/InputBase"
import { styled, alpha } from "@mui/material/styles"
import nic_code from "../misc/nic_code.json"
import Button from "@mui/material/Button"
import Footer from "../components/footer"
import waves from "../images/waves.svg"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { Helmet } from "react-helmet"

import DialogBox from "../components/dialog.js"
import Seo from "../components/seo"
const _ = require("lodash")

const SearchButton = styled(Button)(({ theme }) => ({
  color: "white",
  background: " #4865FF",
  borderRadius: "30px",
  width: "130px",
  // transform: "translate(180%, 20px)",
  "&:hover": {
    background: " #4865FF",
  },
}))

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  color: "black",
  width: "100%",
  backgroundColor: "#EBF3FF",
  height: "55px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  borderRadius: "50px",

  "& .MuiInputBase-root": {
    width: "100%",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}))

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  textAlign: "center",
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}))

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [createData("Frozen yoghurt", "A", 159)]

export default function Home() {
  const [search_string, setSearchInput] = useState("")
  const [section_division_obj, setReturnedResult] = useState({})
  const [is_dialog_open, setDialogStatus] = React.useState(false)

  const handleSeachInput = event => {
    setSearchInput(event.target.value)
  }
  const handleSearchBtnClick = () => {
    if (search_string.length === 21) {
      let cin_two_digits = search_string.slice(1, 3)
      let response = getDivisionSection(cin_two_digits)
      setReturnedResult(response)
    } else {
      handleClickOpen()
      alert("enter valid input")
    }
  }

  const getDivisionSection = code => {
    let response = {}
    for (const [section, values] of Object.entries(nic_code)) {
      values.divisions.map(division => {
        if (division.divison_code === code) {
          response = {
            section: section,
            section_title: values.section_title,
            division_code: division.divison_code,
            division_title: division.division_title,
          }
        }
      })
    }
    return response
  }

  const handleClickOpen = () => {
    console.log("Open")
    setDialogStatus(true)
  }

  const handleClose = () => {
    console.log("Close")
    setDialogStatus(false)
  }
  return (
    <div className="container">
      <Seo
        title="NIC Code Search"
        description="NIC code for your business to obtain Udyog Aadhar. Find section and division of a incorporated company."
        lang="en"
      />
      <Helmet>
        <meta charSet="utf-8" />
        <title>NIC Code Search</title>
        <meta
          name="keywords"
          content="NIC code, CIN code, MCA cin number, Alternative data, crustdata, crustdata alternative data"
          data-react-helmet="true"
        ></meta>
        <meta
          name="description"
          content="NIC code for your business to obtain Udyog Aadhar. Find section and division of a incorporated company."
          data-react-helmet="true"
        ></meta>
        <link rel="canonical" href="http://niccode.com" />
        <link href="https://crustdata.com" />
      </Helmet>
      <Header handleClickOpen={handleClickOpen} />
      <DialogBox open={is_dialog_open} handleClose={handleClose} />
      <main>
        <div className="inner_container">
          <div
            className="search-container"
            style={{ backgroundImage: `url(${waves})` }}
          >
            <div className="search-box">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="L93030DL2010PLC198141"
                  onChange={handleSeachInput}
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <button onClick={handleClickOpen} className="need_help">
                Need help with CIN?
              </button>
              <div className="search_button_container">
                <SearchButton onClick={handleSearchBtnClick}>
                  Search
                </SearchButton>
              </div>
            </div>
          </div>
          {!_.isEmpty(section_division_obj) && (
            <div className="result-container">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="right">Section</StyledTableCell>
                      <StyledTableCell align="right">
                        Section Title
                      </StyledTableCell>

                      <StyledTableCell>Division code</StyledTableCell>
                      <StyledTableCell align="right">
                        Division title
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <StyledTableRow key={section_division_obj.section}>
                      <StyledTableCell component="th" scope="row">
                        {section_division_obj.section}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {section_division_obj.section_title}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {section_division_obj.division_code}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {section_division_obj.division_title}
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
