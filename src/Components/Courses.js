import React, {Component} from 'react';

const imgHome = "images/course";

const name = "coursera-parallel-programming-java.png";
const url = "https://www.coursera.org/account/accomplishments/certificate/ASXVSAQ7EHL7";
const description = "Coursera Parallel Programming Java Certificate";

const urlReact = "https://www.udemy.com/certificate/UC-NG2NYT1J/";
const nameReact = "react.png";
const descriptionReact = "Coursera Parallel Programming Java Certificate";

const urlDocker = "https://www.udemy.com/certificate/UC-UK3Z5MK5/";
const nameDocker = "docker.png";
const descriptionDocker = "Udemy - Docker Mastery: The Complete Toolset From a Docker Captain";

const urlBash = "https://www.udemy.com/certificate/UC-DXUC7S3E/";
const nameBash = "bash.png";
const descriptionBash = "Udemy - BASH Programming Course: Master the Linux Command Line!";


const idPrefix = "certs-";
let lastId = 0;

class Certificates extends Component {

	componentWillMount() {
		this.id = idPrefix + (++lastId);
	}

	render() {
		return (
			<section style={center}>
				<ul>
					{this.getCertificate(url, url, imgHome + "/" + name, description)}
					{this.getCertificate(urlReact, urlReact, imgHome + "/" + nameReact, descriptionReact)}
					{this.getCertificate(urlDocker, urlDocker, imgHome + "/" + nameDocker, descriptionDocker)}
					{this.getCertificate(urlBash, urlBash, imgHome + "/" + nameBash, descriptionBash)}
				</ul>
			</section>
		);
	}

	getCertificate(key, pageUrl, imgSrc, imgDescription) {
		return (
			<li key={key} style={displayInlineBlock}>
				<a href={pageUrl}>
					<img className="cert-image" src={imgSrc} alt={imgDescription}/>
				</a>
			</li>
		);
	}
}

export default Certificates;

const center = {
	textAlign: 'center'
}

const displayInlineBlock = {
	margin: '10px',
	display: 'inline-block'
}
