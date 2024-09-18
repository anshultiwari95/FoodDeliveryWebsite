import Header from "../component/Header";
import NewFoods from "../component/NewFoods";
import RecommendedFood from "../component/RecommendedFood";
import Service from "../component/Service";
import Service2 from "../component/Service2";
import Special from "../component/Special";

const Home = () => {
  return (
    <div>
      <Header />
      <RecommendedFood />
      <Service />
      <NewFoods />
      <Service2 />
      <Special />
    </div>
  );
};

export default Home;
