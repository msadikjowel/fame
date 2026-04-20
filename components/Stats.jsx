import MotionWrapper from "./MotionWrapper";

export default function Stats() {
  return (
    <section className="bg-dark text-white py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8">

        {["8K+", "40K+", "20K", "30+"].map((num, i) => (
          <MotionWrapper key={i}>
            <div>
              <h3 className="text-4xl font-bold">{num}</h3>
              <p>Projects</p>
            </div>
          </MotionWrapper>
        ))}

      </div>
    </section>
  );
}