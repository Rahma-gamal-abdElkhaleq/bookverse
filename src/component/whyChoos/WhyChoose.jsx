import "./WhyChoose.css";

function WhyChoose() {

    const features = [

    {
        icon: "bx bx-search-alt",
        title: "Powerful Search",
        text: "Search millions of books by title, author, or keyword in seconds.",
        color: "#0d6efd",
    },

    {
        icon: "bx bx-heart",
        title: "Personal Favorites",
        text: "Save your favorite books and build your own reading collection.",
        color: "#e83e8c",
    },

    {
        icon: "bx bx-tachometer",
        title: "Fast & Responsive",
        text: "Enjoy a smooth and responsive experience across all your devices.",
        color: "#fd7e14",
    },

    {
        icon: "bx bx-book-reader",
        title: "Huge Library",
        text: "Explore millions of books powered by the Google Books API.",
        color: "#20c997",
    },

];

    return (

        <section className="why-section container">

            <h2 className="why-title">

                Why Readers Love Book Finder 

            </h2>

            <p className="why-subtitle">

                Discover why readers love using Book Finder.

            </p>

            <div className="why-grid">

                {

                    features.map((item, index) => (

                        <div
                            className="why-card"
                            key={index}
                        >

                            <div
                                className="why-icon"
                                style={{
                                    background: `${item.color}15`
                                }}
                            >

                                <i
                                    className={item.icon}
                                    style={{
                                        color: item.color
                                    }}
                                ></i>

                            </div>

                            <h4>

                                {item.title}

                            </h4>

                            <p>

                                {item.text}

                            </p>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}

export default WhyChoose;