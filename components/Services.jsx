import Image from "next/image";
import MotionWrapper from "./MotionWrapper";

export default function Services() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <MotionWrapper key={i}>
            <div className="card-hover p-8 shadow rounded bg-white">
              <img
                src="/service.png"
                alt="serviceFame"
                className="rounded mb-4"
              />
              <h3 className="text-xl font-semibold">Printing Service</h3>
              <p className="text-gray-600 mt-2">
                High quality printing solutions
              </p>
            </div>
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
}
