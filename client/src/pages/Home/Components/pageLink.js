import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const PageLink = ({icon, link, text}) => {
    return (
<a className="page_link"href={link}>
<Card  sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {text}
        </Typography>
        {icon}
      </CardContent>
    </Card>
    </a>
    )   
}
