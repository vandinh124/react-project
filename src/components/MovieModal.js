import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import Poster from './Poster';

const styles = (theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	}
});

const MovieModal = ({ classes, handleClose, open, movie, fetchMovieDetailById, movieInfo }) => {
	useEffect(
		() => {
			fetchMovieDetailById();
		},
		[ fetchMovieDetailById ]
	);

	const productionCompanyList = movieInfo !== null ? movieInfo.production_companies : [];

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			scroll='paper'
			aria-labelledby='scroll-dialog-title'
			aria-describedby='scroll-dialog-description'
		>
			<DialogTitle id='scroll-dialog-title'>{movie.title}</DialogTitle>
			<DialogContent dividers>
				<DialogContentText>
					{/* {movie.overview} */}
					{/* Insert poster here */}
					<Poster
						classes={classes}
						path={movie.backdrop_path}
						overview={movie.overview}
						productionCompanyList={productionCompanyList}
					/>
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color='primary'>
					Close
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default withStyles(styles)(MovieModal);
