import 'bootstrap/dist/css/bootstrap.css'
import React, { useContext } from "react";
import { PolicyContext } from '../components/PolicyContext';

export default function Print() {
	const { fieldContents, setfieldContents } = useContext(PolicyContext)
	// console.log(Object.values(content));
	return (
		<div>
			<h1>Policy ready for fieldsToPrint</h1>
			<h2>{fieldContents}</h2>
		</div>
	)
}