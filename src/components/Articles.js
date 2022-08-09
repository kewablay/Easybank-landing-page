import Card from "./Card";
import Currency from "../images/image-currency.jpg";
import Restaurant from "../images/image-restaurant.jpg";
import Plane from "../images/image-plane.jpg";
import Confetti from "../images/image-confetti.jpg";

function Articles() {
  return (
    <div className="my-16 p-10">
      <h1 className="text-3xl text-center sm:text-left mb-6">
        Latest Articles
      </h1>
      {/* Articles */}
      <div className="sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Card
          img={Currency}
          author={"By Claire Robinson"}
          title={"Receive money in any currency with no fees"}
          text={
            "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single … "
          }
        />
        <Card
          img={Restaurant}
          author={"By Wilson Hutton"}
          title={"Treat yourself without worrying about money"}
          text={
            "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
          }
        />
        <Card
          img={Plane}
          author={"By Wilson Hutton"}
          title={"Take your Easybank card wherever you go"}
          text={
            "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you …"
          }
        />
        <Card
          img={Confetti}
          author={"By Claire Robinson"}
          title={"Receive money in any currency with no fees"}
          text={
            "Our invite-only Beta accounts are now live! After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ..."
          }
        />
      </div>
    </div>
  );
}

export default Articles;
