import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@mui/material"
import { FC } from "react"
import parse from "html-react-parser"
import he from "he"
const BannerHighlight: FC<{
  textImg: string
}> = props => {
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <Box
        sx={{
          width: "100%",
          p: 2,
          display: "flex",
          justifyContent: "center"
        }}
      >
        {parse(he.decode(props.textImg))}
      </Box>
    </Grid>
  )
}

export default BannerHighlight