import React from 'react';

import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
	{
		id: 'q1',
		author: 'John',
		text: 'Learning react is fun',
	},
	{
		id: 'q2',
		author: 'Max',
		text: 'I love ass',
	},
	{
		id: 'q3',
		author: 'Dan',
		text: 'I love tits',
	},
];

const AllQuotes = () => {
	return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
