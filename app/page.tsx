import Link from "next/link";

import {
  FiArrowRight,
  FiSearch,
} from "react-icons/fi";

import {
  getEmployees,
} from "@/lib/getEmployees";

export default async function HomePage() {

  const employees =
    await getEmployees();

  return (

    <main
      className="
min-h-screen

relative
overflow-hidden

bg-[#050D10]
text-white
"
    >

      {/* BACKGROUND */}
      <div
        className="
absolute
inset-0

bg-[radial-gradient(circle_at_top,rgba(198,164,106,0.08),transparent_32%),linear-gradient(180deg,#07181D_0%,#050D10_100%)]
"
      />

      {/* GRID */}
      <div
        className="
absolute
inset-0
opacity-[0.03]

bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

bg-[size:80px_80px]
"
      />

      {/* CONTENT */}
      <div
        className="
relative
z-10

max-w-7xl
mx-auto

px-6
md:px-10

py-12
md:py-20
"
      >

        {/* TOP BAR */}
        <div
          className="
flex
items-center
justify-between
"
        >

          <div className="flex items-center gap-4">

            <img
              src="/logos/logo-light.png"
              alt="NADIM"
              className="
w-[52px]
h-[52px]

object-contain
"
            />

            <div>

              <h2
                className="
text-[16px]
md:text-[18px]

font-medium
tracking-[-0.03em]
"
              >
                Nadim
              </h2>

            </div>

          </div>

          {employees[0] && (

            <Link
              href={`/${employees[0].slug}`}
              className="
hidden
md:flex
items-center
gap-2

text-[13px]
uppercase
tracking-[0.2em]

opacity-70
hover:opacity-100

transition-all
"
            >
              Open Card
              <FiArrowRight />
            </Link>

          )}

        </div>

        {/* HERO */}
        <section
          className="
pt-20
md:pt-24
pb-14
"
        >

          <div className="max-w-5xl">

            <h1
              className="
text-[58px]
sm:text-[82px]
md:text-[132px]

leading-[0.9]
tracking-[-0.07em]

font-semibold

max-w-6xl
"
            >
              Nadim
            </h1>

          </div>

        </section>

        {/* SEARCH */}
        <section
          className="
mb-10
"
        >

          <div
            className="
relative
max-w-2xl
"
          >

            <FiSearch
              className="
absolute
left-5
top-1/2
-translate-y-1/2

text-[18px]
opacity-40
"
            />

            <input
              placeholder="Search employee..."
              className="
w-full

h-[68px]

pl-14
pr-6

rounded-[28px]

border
border-white/[0.05]

bg-[linear-gradient(145deg,rgba(10,22,25,0.88),rgba(5,14,16,0.94))]

backdrop-blur-xl

outline-none

text-[17px]

placeholder:text-white/35

shadow-[0_12px_40px_rgba(0,0,0,0.28)]
"
            />

          </div>

        </section>

        {/* EMPLOYEES */}
        <section>

          <div
            className="
flex
flex-wrap

gap-4
"
          >

            {employees.map((employee: any) => (

              <Link
                key={employee.slug}
                href={`/${employee.slug}`}
                className="
relative

w-full
sm:w-[48%]
lg:w-[31.8%]

overflow-hidden

rounded-[30px]

border
border-white/[0.04]

bg-[linear-gradient(145deg,rgba(10,22,25,0.88),rgba(5,14,16,0.94))]

p-7

backdrop-blur-xl

shadow-[0_12px_40px_rgba(0,0,0,0.24)]

transition-all
duration-500

hover:-translate-y-1
hover:border-white/[0.08]
"
              >

                <div
                  className="
absolute
inset-0

opacity-0
hover:opacity-100

transition-all

bg-[radial-gradient(circle_at_top_left,rgba(198,164,106,0.12),transparent_45%)]
"
                />

                <div className="relative z-10">

                  <img
                    src="/logos/logo-light.png"
                    alt="NADIM"
                    className="
w-[58px]
h-[58px]

object-contain

mb-12
opacity-90
"
                  />

                  <p
                    className="
text-[12px]
uppercase
tracking-[0.22em]
opacity-45
mb-3
"
                  >
                    {employee.title}
                  </p>

                  <h3
                    className="
text-[28px]
md:text-[34px]

leading-[1.04]
tracking-[-0.045em]

font-semibold
"
                  >
                    {employee.name}
                  </h3>

                </div>

              </Link>

            ))}

          </div>

        </section>

      </div>

    </main>

  );

}