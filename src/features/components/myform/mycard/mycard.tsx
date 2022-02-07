import * as React from "react";
import { ReactElement } from "react";
import { Card, CardActionArea, CardContent, Typography, FormControlLabel, Radio } from "@material-ui/core";

interface Props {
    label: string;
    Cost: string;
    txtBody?: string;
   
   }

const MyCard = ({label, Cost,txtBody}: Props): ReactElement => {
  return (
    <>
        <Card>
        <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                <FormControlLabel className="LabelCart" value={label} control={<Radio />} label={label} />
                <span >{Cost}</span>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {txtBody}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    </>
  );
};

export default MyCard;