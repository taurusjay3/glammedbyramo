import Layout from "@/components/Layout";
import photo1 from "@/assets/photo1.jpg";
import photo2 from "@/assets/photo2.jpg";
import photo3 from "@/assets/photo3.jpg";
import photo4 from "@/assets/photo4.jpg";
import photo5 from "@/assets/photo5.jpg";
import photo6 from "@/assets/photo6.jpg";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

const Portfolio = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Our Work</p>
            <h1 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">Portfolio</h1>
            <p className="mt-4 text-muted-foreground">
              A showcase of our makeup transformations and artistry.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:gap-5">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="group aspect-square overflow-hidden rounded-lg transition-all hover:shadow-lg"
              >
                <img src={photo} alt={`Makeup look ${i + 1}`} className="h-full w-full object-cover transition-transform group-hover:scale-105" loading="lazy" />
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-muted-foreground">
            Follow us on Instagram{" "}
            <a
              href="https://www.instagram.com/glammedbyramo?igsh=aWFmcHc1N2J4empl"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              @glammedbyramo
            </a>{" "}
            for more looks!
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
