import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './language.css';

const languages = [
    {
        name: "Dutch",
        description: "West Germanic language spoken in the Netherlands, Belgium, and Suriname.",
        imageUrl: "https://cdn.britannica.com/82/2982-050-4A783E03/flag-prototype-Netherlands-countries-European-flags.jpg",
        link: "../Modulesall/Dutch/Module1.html"
    },
    {
        name: "French",
        description: "Romance language spoken in France, Quebec, Belgium, Switzerland, and many African countries.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png",
        link: "../Modulesall/French/Module1.html"
    },
    {
        name: "Italian",
        description: "Official language of Italy, Switzerland, San Marino, and the Vatican City, known for its musicality.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
        link: "../Modulesall/Italian/Module1.html"
    },
    {
        name: "Portuguese",
        description: "Official language of Portugal, Brazil, and several countries in Africa and Asia.",
        imageUrl: "https://media.istockphoto.com/id/1569504346/vector/waving-flag-of-portugal-blowing-in-the-wind-full-page-flying-flag.jpg?s=612x612&w=0&k=20&c=5n5qvx4dyv0piCHzUjlsFQj5MNBmmYr9gt6Zs5X8sEE=",
        link: "../Modulesall/Portugese/Module1.html"
    },
    {
        name: "Spanish",
        description: "Official language in 20 countries, widely spoken in Central and South America, and the US.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg",
        link: "../Modulesall/Spanish/Module1.html"
    },
    {
        name: "Swedish",
        description: "North Germanic language spoken in Sweden, Finland, and parts of Norway.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqy633oAlkNd_u-tx14Fopwhb57LqPswCoPQ&s",
        link: "../Modulesall/Swedish/Module1.html"
    },
    {
        name: "Norwegian",
        description: "The official language of Norway is Norwegian.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/1200px-Flag_of_Norway.svg.png",
        link: "../Modulesall/Norweign/Module1.html"
    },
    {
        name: "Hindi",
        description: "It is the most popular language in India. About 80% of people in India communicate in Hindi.",
        imageUrl: "https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg",
        link: "../Modulesall/Hindi/Module1.html"
    },
    {
        name: "Esperanto",
        description: "Esperanto is a language mainly spoken in Esperanto country.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Flag_of_Esperanto.svg",
        link: "../Modulesall/Esperanto/Module1.html"
    },
    {
        name: "English",
        description: "English is nowadays spoken in every country on the planet and is a must-learn language for each individual.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg",
        link: "../Modulesall/English/Module1.html"
    }
];

function LanguageCard({ name, description, imageUrl, link }) {
    return (
        <div className="card">
            <div className="image-box">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="content">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <div className="button" style={{ paddingLeft: '105px' }}>
                <a href={link}>
                    <input type="button" className="btn" value="Explore" />
                </a>
            </div>
        </div>
    );
}

export default function LanguageSelection() {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg fixed-top navbar-scroll">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="..">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: 'white' }} href="#!">Languages</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: 'white' }} href="#!">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: 'white' }} href="#!">Signup</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: 'white' }} href="#!">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: 'white' }} href="#!">Pricing</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav d-flex flex-row">
                            <li className="nav-item me-3 me-lg-0">
                                <a className="nav-link" href="#!">
                                    <i className="fas fa-shopping-cart"></i>
                                </a>
                            </li>
                            <li className="nav-item me-3 me-lg-0">
                                <a className="nav-link" href="#!">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li className="nav-item me-3 me-lg-0">
                                <a className="nav-link" href="#!">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <h1 className="mt-5 pt-5">What Language You want to learn today -</h1>

            <div className="cards-container">
                {languages.map((language, index) => (
                    <LanguageCard
                        key={index}
                        name={language.name}
                        description={language.description}
                        imageUrl={language.imageUrl}
                        link={language.link}
                    />
                ))}
            </div>
        </div>
    );
}
