import style from 'styled-components'

const Container = style.div`
    margin: 0 auto;
    width: 99%;
    @media(min-width: 700px) { 
    	width: 80%;
  	}
`;

const getColumn = (valueGrid) =>{
	if(!valueGrid) return;
	const width = valueGrid / 12 * 100;
	return `width: ${width}%;`;
}

const Col = style.div`
	padding: .25rem;
    @media(min-width: 700px) { 
    	${({ Desk }) => Desk && getColumn(Desk)}
  	}
`;

const Row = style.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    &:after {
	  content: "";
	  clear: both;
	  display: table;
	}
    @media(min-width: 700px) { 
    	flex-direction: row;
  	}
`;

export{
    Container,
    Col,
    Row
}