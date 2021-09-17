import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function oneCard(props) {
    
    return (
        
            <Card sx={{ maxWidth: 345 }} style={{'display':'flex','margin':'20px'}}>
                <CardContent>
                    <Typography variant="h5" color="black">
                      {props.Data.title}
                    </Typography>
                    <Typography variant="p" color="text.secondary">
                      {props.Data.body}
                    </Typography>
                </CardContent>
            </Card>
        
    )
}
