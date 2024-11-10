// Components
import { Card } from "@/components";

// Assets
import "@/assets/css/globals.css";

export default function Home() {
  return (
    <div className=" my-4 max-w-auto">
      <Card
        image={
          "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg"
        }
        title="Airfoce Nike 1"
        descp="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quasi tenetur totam, voluptatum velit at, ducimus harum laboriosam architecto, voluptatibus veniam voluptatem. Enim deserunt dignissimos cumque consectetur. Debitis, magnam quod!"
        price={400}
      />
    </div>
  );
}
