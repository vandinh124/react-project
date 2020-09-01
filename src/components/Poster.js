import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MovieDescription from './MovieDescription';
import ProductionCompanyList from './ProductionCompanyList';

const styles = (theme) => ({
	poster: {
		'margin-top': '10px'
	}
});

/**
 * Displays a 500 px wide movie poster
 * 
 * @param {string} path - path to poster image
 * 
 * @returns {ReactComponent} Poster 
 */
const Poster = ({ classes, path, overview, productionCompanyList }) => (
	<div>
		<img className={classes.poster} src={`https://image.tmdb.org/t/p/w500${path}`} alt='' />
		<MovieDescription overview={overview} />
		<ProductionCompanyList productionCompanyList={productionCompanyList} />
	</div>
);

export default withStyles(styles)(Poster);
