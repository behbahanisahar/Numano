import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FormControlLabel, Radio } from '@mui/material';
import React, { ReactElement } from 'react';
import './MyCard.css';


interface Props {
 label: string;
 Cost: string;
 txtBody: string;

}

const MyCard = ({label, Cost, txtBody}: Props): ReactElement => {

  return (
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
  );

}
export default MyCard;