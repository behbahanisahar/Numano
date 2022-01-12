import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import * as React from 'react';
import { ReactElement } from 'react';

const CardRam = (): ReactElement => {
    return <Card >
        <CardMedia
            component="img"
            height="300"
            width="800"
            image="https://dkstatics-public.digikala.com/digikala-adservice-banners/f3b37f198c71fe2c46e5beb3bbf11ca4757ba811_1641644579.jpg?x-oss-process=image/quality,q_80"
            alt="green iguana" />
        <CardContent>
        </CardContent>
  
    </Card>;
  };

  export default CardRam
 

