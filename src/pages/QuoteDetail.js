import React from 'react';

import { useParams, Route } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

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

const QuoteDetail = () => {
	const params = useParams();

	const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

	if (!quote) {
		return <p>No quote found.</p>;
	}

	return (
		<>
			<h1>Quote Details</h1>
			<HighlightedQuote text={quote.text} author={quote.author} />
			<Route path={`/quotes/${params.quoteId}/comments`}>
				<Comments />
			</Route>
		</>
	);
};

export default QuoteDetail;
