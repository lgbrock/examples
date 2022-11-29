import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const Item = (props) => {
	return (
		<Paper>
			<h2>{props.item.name}</h2>
			<p>{props.item.description}</p>
			<Button className='CheckButton'>Check it out!</Button>
		</Paper>
	);
};

export default Item;
