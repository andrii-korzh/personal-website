import React, {Component} from 'react';

const imgHome = "images/course";

const urlCourseraSpecialization = "https://www.coursera.org/account/accomplishments/specialization/certificate/ZF94XPHKYZZJ?utm_medium=certificate&utm_source=link&utm_campaign=copybutton_certificate";
const descriptionCourseraSpecialization = "Coursera Specialization Parallel, Concurrent and Distributed Programming in Java";
const nameCourseraSpecialization = "coursera-specialization-parallel-concurrent-distributed-programming-java.png";

const nameParallelJava = "coursera-parallel-programming-java.png";
const urlParallelJava = "https://www.coursera.org/account/accomplishments/certificate/ASXVSAQ7EHL7";
const descriptionParallelJava = "Coursera Parallel Programming Java Certificate";

const nameConcurrentJava = "coursera-concurrent-programming-java.png";
const urlConcurrentJava = "https://www.coursera.org/account/accomplishments/certificate/R472UNFTQQXF";
const descriptionConcurrentJava = "Coursera Concurrent Programming Java Certificate";

const nameDistributedtJava = "coursera-distributed-programming-java.png";
const urlDistributedJava = "https://www.coursera.org/account/accomplishments/certificate/G47T428RZZQL";
const descriptionDistributedJava = "Coursera Distributed Programming Java Certificate";

const urlReact = "https://www.udemy.com/certificate/UC-NG2NYT1J/";
const nameReact = "react.png";
const descriptionReact = "Udemy React 16 - The Complete Guide(incl. React Router 4 & Redux)";

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
					{this.getCertificate(urlDistributedJava, urlDistributedJava, imgHome + "/" + nameDistributedtJava, descriptionDistributedJava)}
					{this.getCertificate(urlParallelJava, urlParallelJava, imgHome + "/" + nameParallelJava, descriptionParallelJava)}
					{this.getCertificate(urlConcurrentJava, urlConcurrentJava, imgHome + "/" + nameConcurrentJava, descriptionConcurrentJava)}
					{this.getCertificate(urlCourseraSpecialization, urlCourseraSpecialization, imgHome + "/" + nameCourseraSpecialization, descriptionCourseraSpecialization)}
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
