import React from 'react';
import { Typography, Paper, Divider } from '@material-ui/core';

const ProductionCompanyList = ({ productionCompanyList }) => {
	const renderList = () => {
		return !productionCompanyList.length
			? ''
			: productionCompanyList.map((company) => {
					return (
						<Paper
							elevation={3}
							key={company.id}
							style={{
								border: '2px solid grey',
								borderRadius: '10px',
								width: '90%',
								height: '80%',
								padding: '10px',
								margin: '10px 0px'
							}}
						>
							<img
								src={
									company.logo_path === null ? (
										''
									) : (
										`https://image.tmdb.org/t/p/w500${company.logo_path}`
									)
								}
								style={{ width: '90%' }}
								alt={company.name}
							/>
							<Divider />
							<Typography variant='h6' gutterBottom>
								Production Company Name: {company.name}
							</Typography>
							<Typography variant='subtitle1' gutterBottom>
								Origin Country: {company.origin_country}
							</Typography>
						</Paper>
					);
				});
	};
	return <div>{renderList()}</div>;
};

export default ProductionCompanyList;
