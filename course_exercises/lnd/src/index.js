import React from 'react'
import { render } from 'react-dom'
import { SkiDayList } from './components/SkiDayList' // importo l'elemento

// Sicurezza!! aggancio React alla 'window' per evitare che venga restituito 'React is not defined'
window.React = React

render(
	<SkiDayList days={

	} />, // qui richiamo il render del contenuto dell'app
	document.getElementById('react-container')
)