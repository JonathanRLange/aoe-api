import React, { Component } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

class DataCard extends Component {
  render() {
    //const classes = useStyles(); https://stackoverflow.com/questions/56329992/invalid-hook-call-hooks-can-only-be-called-inside-of-the-body-of-a-function-com
    //console.log(this.props)
    return (
      <Card>
        <CardContent>
          <Typography>{this.props.civ.name}</Typography>
          <Typography>{this.props.civ.army_type}</Typography>
        </CardContent>
      </Card>
    )
  }
}

export default DataCard
