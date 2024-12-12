const awards = [
  {
    id: 1,
    img: "img/awards/1.png",
    name: "Brand Finance",
    title: "Mukesh D Ambani is #1 CEO in India, #2 globally in Brand Guardianship Index 2024",
  },
  {
    id: 2,
    img: "img/awards/2.png",
    name: "100 Most powerful people",
    title: "Mukesh D Ambani is among the 100 Most Powerful People in Business 2024; only Indian on the list",
  },
  {
    id: 3,
    img: "img/awards/3.png",
    name: "IE 100",
    title: "Mukesh D Ambani and Nita M Ambani are among the IE 100 Most Powerful Indians 2024",
  },
  {
    id: 4,
    img: "img/awards/4.png",
    name: "Voice Data",
    title: "Mukesh D Ambani honoured with Lifetime Achievement Award 2024",
  },
  {
    id: 5,
    img: "img/awards/5.png",
    name: "Best in Education",
    title: "Nita M Ambani recognised for ‘Outstanding Contributions to Brand India’ at IBLA Awards 2024",
  },
  {
    id: 6,
    img: "img/awards/6.png",
    name: "Miss World",
    title: "Nita M Ambani receives Beauty with a Purpose Humanitarian Award",
  },
  {
    id: 7,
    img: "img/awards/7.png",
    name: "MPW Asia",
    title: "Isha M Ambani recognized among Fortune 100 Most Powerful Women Asia for 2024",
  },
  {
    id: 8,
    img: "img/awards/8.png",
    name: "Baazar",
    title: "Isha M Ambani named among Harper’s Bazaar 150 Vision",
  },
  {
    id: 9,
    img: "img/awards/9.png",
    name: "Lokmat",
    title: "Isha M Ambani honoured at Lokmat Maharashtrian of the Year Awards 2024",
  },
];

const Awards = () => {
  return (
    <section className="awards block dark">
      <div className="container">
        <div className="secHeading">
          <h3>Awards & Recognition</h3>
        </div>

        <div className="row">
          {awards.map((award) => (
            <div className="col-lg-2 col-md-4 col-sm-6" key={award.id}>
              <div className="award">
                <div className="awImg">
                  <img src={award.img} alt={`${award.name} logo`} />
                </div>
                <p>{award.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
