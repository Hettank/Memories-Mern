import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1)
        },
    },
    paper: {
        padding: theme.spacing(2)
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 5
    },
    fileInput: {
        width: '97%',
        margin: '10px 10px'
    },
    buttonSubmit: {
        marginBottom: 10,
        margin: '0 10px 10px 10px'
    }
}));