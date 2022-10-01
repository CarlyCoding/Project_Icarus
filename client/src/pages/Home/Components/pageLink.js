import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const PageLink = ({link, text}) => {
    return (

        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {text}
        </Typography>
      </CardContent>
      <CardActions>
      <a href={link}>{text}</a>
      </CardActions>
    </Card>
    )   
}
